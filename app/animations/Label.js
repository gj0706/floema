import Animation from "../classes/Animation";
import GSAP from "gsap";
import { calculate, split } from "utils/text";
import each from "lodash/each";

export default class Label extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });
  }

  /**
   * This method lazy loads the titles as user scrolls
   * It overrides the one in its parent class: Animation
   */
  animateIn() {
    this.timelineIn = GSAP.timeline({ delay: 0.5 });
    this.timelineIn.set(this.element, { autoAlpha: 1 });

    each(this.elementsLines, (line, index) => {
      this.timelineIn.fromTo(
        line,
        { y: "100%" },
        {
          delay: index * 0.2,
          duration: 1.5,
          y: "0%",
          ease: "expo.out",
        },
        0
      );
    });
  }

  animateOut() {
    GSAP.set(this.element, { autoAlpha: 0 });
  }
}
