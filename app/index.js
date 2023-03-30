import About from "./pages/About/index";
import Home from "./pages/Home//index";
import Detail from "./pages/Details/index";
import Collections from "./pages/Collections/index";

class App {
  constructor() {
    // this.createPages();
    console.log("hello");
  }

  createPages() {
    this.pages = {
      about: new About(),
      home: new Home(),
      detail: new Detail(),
      collections: new Collections(),
    };
    this.page = this.pages;
    console.log(this.pages);
  }
}

new App();
