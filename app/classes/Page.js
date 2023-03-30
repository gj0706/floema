export default class Page {
  constructor({ element, elements, id }) {
    this.id = id;
    this.selector = element;
    this.selectorChildren = { ...elements };
  }
  create() {
    this.element = document.querySelector(this.selector);
    console.log("Create", this.id, this.element);
    this.elements = {};
    this.selectorChildren.forEach((entry) => {
      console.log(entry);
    });
    console.log("Create", this.id, this.element);
  }
}
