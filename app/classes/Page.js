import GSAP from "gsap";
import NormalizeWheel from "normalize-wheel";
import Prefix from "prefix";

import each from "lodash/each";
import map from "lodash/map";

import Highlight from "animations/Highlight";
import Title from "animations/Title";
import Paragraph from "animations/Paragraph";
import Label from "animations/Label";
/**
 * This is a Page parent class that provides the page's parent id, selector and it's children selectors for future use.
 */

export default class Page {
  constructor({ element, elements, id }) {
    this.id = id;
    this.selector = element;
    this.selectorChildren = {
      ...elements,
      animationsHighlights: '[data-animation="highlight"]',
      animationsTitles: '[data-animation="title"]',
      animationsParagraphs: '[data-animation="paragraph"]',
      animationsLabels: '[data-animation="label"]',
    };
    this.transformPrefix = Prefix("transform");
    console.log(this.transformPrefix);

    this.onMouseWheelEvent = this.onMouseWheel.bind(this);
  }

  /**
   * This method will behave like componentDidMount in React
   * It selects all the selectors for future use.
   *  */
  create() {
    // select the page's top parent element, like ".home" or ".navigation"
    this.element = document.querySelector(this.selector);

    // initialize children elements
    this.elements = {};

    // initialize mouse scroll position
    this.scroll = {
      current: 0, // current position sof mouse scroll
      target: 0, // target postion
      last: 0, // last postion of mouse scroll
      limit: 0, // pixels that mousewheel can scroll the most
    };

    // Iterate through all the children elements and select all of them
    each(this.selectorChildren, (entry, key) => {
      if (
        entry instanceof window.HTMLElement ||
        entry instanceof window.NodeList ||
        Array.isArray(entry)
      ) {
        this.elements[key] = entry;
      } else {
        this.elements[key] = document.querySelectorAll(entry);
        if (this.elements[key].length === 0) {
          this.elements[key] = null;
        } else if (this.elements[key].length === 1) {
          this.elements[key] = document.querySelector(entry);
        }
      }
      console.log("elements: ", this.elements[key], entry);
    });

    this.createAnimations();
  }

  createAnimations() {
    this.animations = [];

    //Highlights
    this.animationsHighlights = map(
      this.elements.animationsHighlights,
      (element) => {
        return new Highlight({ element });
      }
    );

    //Titles
    this.animationsTitles = map(this.elements.animationsTitles, (element) => {
      return new Title({ element });
    });

    this.animations.push(this.animationsTitles);

    //Paragraphs
    this.animationsParagraphs = map(
      this.elements.animationsParagraphs,
      (element) => {
        return new Paragraph({ element });
      }
    );
    this.animations.push(this.animationsParagraphs);

    //Labels
    this.animationsLabels = map(this.elements.animationsLabels, (element) => {
      return new Label({ element });
    });

    this.animations.push(...this.animationsLabels);
  }

  // show page animation
  show() {
    return new Promise((resolve) => {
      this.animationIn = GSAP.timeline();
      this.animationIn.fromTo(
        this.element,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          onComplete: resolve,
        }
      );
      this.animationIn.call(() => {
        this.addEventListeners();
        resolve();
      });
    });
  }

  // hide page animation
  hide() {
    return new Promise((resolve) => {
      this.removeEventListeners();
      this.animationOut = GSAP.timeline();
      this.animationOut.to(this.element, {
        autoAlpha: 0,
        onComplete: resolve,
      });
    });
  }

  onMouseWheel(event) {
    const { pixelY } = NormalizeWheel(event);
    this.scroll.target += pixelY;
  }

  onResize() {
    if (this.elements.wrapper) {
      this.scroll.limit =
        this.elements.wrapper.clientHeight - window.innerHeight;
    }

    // each(this.animations, (animation) => {
    //   animation.onResize();
    // });

    each(this.animationsLabels, (animation) => {
      animation.onResize();
    });

    each(this.animationsTitles, (animation) => {
      animation.onResize();
    });

    each(this.animationsParagraphs, (animation) => {
      animation.onResize();
    });

    each(this.animationsHighlights, (animation) => {
      animation.onResize();
    });
  }

  update() {
    this.scroll.target = GSAP.utils.clamp(
      0,
      this.scroll.limit,
      this.scroll.target
    );
    this.scroll.current = GSAP.utils.interpolate(
      this.scroll.current,
      this.scroll.target,
      0.1
    );
    if (this.scroll.current < 0.01) {
      this.scroll.current = 0;
    }

    if (this.elements.wrapper) {
      this.elements.wrapper.style[
        this.transformPrefix
      ] = `translateY(-${this.scroll.current}px)`;
    }
  }

  addEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheelEvent);
  }

  removeEventListeners() {
    window.addEventListener("mousewheel", this.onMouseWheelEvent);
  }
}
