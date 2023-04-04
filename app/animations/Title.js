import Animation from "../classes/Animation";
import GSAP from "gsap";

export default class Title extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });
  }

  /**
   * This method lazy loads the titles as user scrolls
   * It overrides the one in its parent class: Animation
   */
  animateIn() {
    GSAP.fromTo(
      this.element,
      { autoAlpha: 0 },
      { autoAlpha: 1, delay: 0.5, duration: 1.5 }
    );
  }

  animateOut() {
    GSAP.set(this.element, { autoAlpha: 0 });
  }
}
