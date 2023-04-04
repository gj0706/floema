import GSAP from "gsap";

// import Link from "animations/Link";
import Component from "classes/Component";

import { COLOR_BRIGHT_GRAY, COLOR_QUARTER_SPANISH_WHITE } from "utils/colors";
import { mapEach } from "utils/dom";

export default class Navigation extends Component {
  constructor({ template }) {
    super({
      element: ".navigation",
      elements: {
        items: ".navigation__list__item",
        links: ".navigation__list__link",
      },
    });

    // this.links = mapEach(this.elements.links, (element) => {
    //   return new Link({
    //     element,
    //   });
    // });

    this.onChange(template);
  }

  onChange(template) {
    if (template === "about") {
      GSAP.to(this.element, {
        color: COLOR_BRIGHT_GRAY,
        duration: 1.5,
      });
      GSAP.to(this.elements.items[0], {
        autoAlpha: 1,
        duration: 0.75,
        delay: 0.75,
      });
      GSAP.to(this.elements.items[1], { autoAlpha: 0, duration: 0.75 });
    } else {
      GSAP.to(this.element, {
        color: COLOR_QUARTER_SPANISH_WHITE,
        duration: 1.5,
      });
      GSAP.to(this.elements.items[0], { autoAlpha: 0, duration: 0.75 });
      GSAP.to(this.elements.items[1], {
        autoAlpha: 1,
        duration: 0.75,
        delay: 0.75,
      });
    }
  }
}
