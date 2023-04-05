import each from "lodash/each";
import Canvas from "./components/Canvas";
import About from "./pages/About/index";
import Home from "./pages/Home//index";
import Detail from "./pages/Details/index";
import Collections from "./pages/Collections/index";
import Preloader from "./components/Preloader";
import Navigation from "./components/Navigation";

class App {
  constructor() {
    this.createContent();

    this.createPreloader();
    this.createNavigation();
    this.createCanvas();
    this.createPages();

    this.addEventListeners();
    this.addLinkListeners();

    this.onResize();

    this.update();
  }

  createNavigation() {
    this.navigation = new Navigation({ template: this.template });
  }

  createPreloader() {
    this.preloader = new Preloader();
    this.preloader.once("completed", this.onPreloaded.bind(this));
  }

  createCanvas() {
    this.canvas = new Canvas();
  }

  createContent() {
    this.content = document.querySelector(".content");
    this.template = this.content.getAttribute("data-template");
  }

  createPages() {
    this.pages = {
      about: new About(),
      home: new Home(),
      detail: new Detail(),
      collections: new Collections(),
    };
    this.page = this.pages[this.template];
    this.page.create();
  }

  /**
   * Events.
   */
  onPreloaded() {
    this.preloader.destroy();
    this.onResize();

    this.page.show();
  }

  /** /
   * a method to handle page navigation onclick using ajax, without
   * refreshing the page, similar to React RouterDOM
   */
  async onChange(url) {
    await this.page.hide();
    const request = await window.fetch(url);
    if (request.status === 200) {
      // get all the text from target html page
      const html = await request.text();
      const div = document.createElement("div");
      div.innerHTML = html;
      const divContent = div.querySelector(".content");
      this.template = divContent.getAttribute("data-template");
      this.background = divContent;

      this.navigation.onChange(this.template);

      this.content.setAttribute("data-template", this.template);
      this.content.innerHTML = divContent.innerHTML;

      this.page = this.pages[this.template];
      this.page.create();
      this.onResize();
      this.page.show();
      this.addLinkListeners();
    } else {
      console.log("Error");
    }
  }

  onResize() {
    if (this.canvas && this.canvas.onResize) {
      this.canvas.onResize();
    }
    if (this.page && this.page.onResize) {
      this.page.onResize();
    }
  }

  /**
   * Loop: this method updates on every animation frame changes
   */
  update() {
    if (this.canvas && this.canvas.update) {
      this.canvas.update();
    }
    if (this.page && this.page.update) {
      this.page.update();
    }

    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }

  /**
   * Listeners
   */
  addEventListeners() {
    window.addEventListener("resize", this.onResize.bind(this));
  }
  addLinkListeners() {
    const links = document.querySelectorAll("a");
    each(links, (link) => {
      // use onclick instead of addEventListener because it only needs to fire once
      link.onclick = (event) => {
        event.preventDefault();
        const { href } = link;
        this.onChange(href);
        // console.log(event, href);
      };
    });
  }
}

new App();
