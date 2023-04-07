import GSAP from "gsap";
import { Mesh, Program, Texture } from "ogl";

import fragment from "shaders/plane-fragment.glsl";
import vertex from "shaders/plane-vertex.glsl";

export default class {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element;
    this.geometry = geometry;
    this.gl = gl;
    this.index = index;
    this.scene = scene;
    this.sizes = sizes;

    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({
      sizes: this.sizes,
    });
  }

  createTexture() {
    // create an empty texture to hold image
    this.texture = new Texture(this.gl);
    this.image = new window.Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = this.element.getAttribute("data-src");
    this.image.onload = () => {
      this.texture.image = this.image;
      console.log("texture image: ", this.texture.image);
    };
  }

  createProgram() {
    this.program = new Program(this.gl, {
      vertex,
      fragment,
      uniforms: {
        tMap: { value: this.texture },
      },
    });
  }

  createMesh() {
    this.mesh = new Mesh(this.gl, {
      geometry: this.geometry,
      program: this.program,
    });

    this.mesh.setParent(this.scene);
    this.mesh.scale.x = 2;
    this.mesh.position.x = this.index * this.mesh.scale.x;
  }

  createBounds({ sizes }) {
    this.bounds = this.element.getBoundingClientRect();
    this.updateScale(sizes);
    this.updateX();
    this.updateY();
    console.log("bounds: ", this.bounds);
  }

  onResize(sizes) {
    this.createBounds(sizes);
  }

  updateScale({ height, width }) {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;

    this.mesh.scale.x = width * this.width;
    this.mesh.scale.y = height * this.height;
    console.log("mesh x", this.mesh.scale.x, "mesh y: ", this.mesh.scale.y);
    this.x = this.bounds.left / window.innerWidth;
    this.y = this.bounds.top / window.innerHeight;

    console.log("x ", this.x, "y ", this.y);

    this.mesh.position.x = -width / 2 + this.mesh.scale.x / 2 + this.x * width;

    this.mesh.position.y = height / 2 - this.mesh.scale.y / 2 - this.y * height;
    console.log("Mesh.position x : ", this.mesh.position.x);
  }

  updateX() {}

  updateY() {}
}
