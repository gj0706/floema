import Component from "classes/Component";
// import AutoBind from "auto-bind";
import Prefix from "prefix";

export default class Animation extends Component {
  constructor({ element, elements }) {
    super({ element, elements });
    this.createObserver();
    this.animateOut();
  }

  createObserver() {
    this.observer = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!this.isVisible && entry.isIntersecting) {
          this.animateIn();
        } else {
          this.animateOut();
        }
      });
    });
    this.observer.observe(this.element);
  }

  animateIn() {
    this.isVisible = true;
  }

  animateOut() {
    this.isVisible = false;
  }

  onResize() {}
}
