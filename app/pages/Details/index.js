import Button from "../../animations/Button";
import Page from "../../classes/Page";

export default class Details extends Page {
  constructor() {
    super({
      id: "details",
      element: ".details",
      elements: { button: ".detail__button" },
    });
    // console.log("details");
  }

  create() {
    super.create();
    this.link = new Button({
      element: this.elements.button,
    });
    // this.elements.link.addEventListener("click", (_) => console.log("clicked"));
  }
  destory() {
    super.destroy();
    this.link.removeEventListeners();
  }
}
