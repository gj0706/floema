import Animation from "../classes/Animation";
import GSAP from "gsap";
import { calculate, split } from "utils/text";

export default class Title extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });

    split({
      element: this.element,
    });

    split({
      element: this.element,
    });

    this.elementLinesSpans = this.element.querySelectorAll("span span");
  }

  /**
   * This method lazy loads the titles as user scrolls
   * It overrides the one in its parent class: Animation
   */
  animateIn() {
    GSAP.set(this.element, { autoAlpha: 1 });
    GSAP.fromTo(
      this.elementsLines,
      { y: "100%" },
      {
        autoAlpha: 1,
        delay: 0.5,
        duration: 1.5,
        y: "0%",
        stagger: { amount: 1, axis: "x" },
      }
    );
  }

  animateOut() {
    GSAP.set(this.element, { autoAlpha: 0 });
  }

  onResize() {
    this.elementsLines = calculate(this.elementLinesSpans);

    console.log(this.elementsLines);
  }
}
