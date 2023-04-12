import GSAP from "gsap";
import Animation from "classes/Animation";

export default class Label extends Animation {
  constructor({ element, elements }) {
    super({ element, elements });
  }

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
