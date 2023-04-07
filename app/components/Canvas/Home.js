import { Plane, Transform } from "ogl";
import GSAP from "gsap";

import map from "lodash/map";

import Media from "./Media";

export default class {
  constructor({ gl, scene, sizes }) {
    this.gl = gl;
    this.group = new Transform();
    this.scene = scene;
    this.sizes = sizes;

    this.galleryElement = document.querySelector(".home__gallery");
    this.mediasElements = document.querySelectorAll(
      ".home__gallery__media__image"
    );

    this.createGeometry();
    this.createGallery();
    this.group.setParent(this.scene);

    this.onResize({
      sizes: this.sizes,
    });
  }

  createGeometry() {
    this.geometry = new Plane(this.gl);
  }

  createGallery() {
    this.medias = map(this.mediasElements, (element, index) => {
      return new Media({
        element,
        geometry: this.geometry,
        index,
        gl: this.gl,
        scene: this.group,
        sizes: this.sizes,
      });
    });
  }

  onResize(event) {
    map(this.medias, (media) => media.onResize(event));
  }
}
