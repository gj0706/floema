import GSAP from "gsap";
import { Mesh, Program, Texture } from "ogl";

import fragment from "shaders/home-fragment.glsl";
import vertex from "shaders/home-vertex.glsl";

export default class Media {
  constructor({ element, geometry, gl, index, scene, sizes }) {
    this.element = element;
    this.geometry = geometry;
    this.gl = gl;
    this.index = index;
    this.scene = scene;
    this.sizes = sizes;

    this.extra = {
      x: 0,
      y: 0,
    };

    this.createTexture();
    this.createProgram();
    this.createMesh();
    this.createBounds({
      sizes: this.sizes,
    });
  }

  createTexture() {
    this.texture = new Texture(this.gl);
    this.image = new window.Image();
    this.image.crossOrigin = "anonymous";
    this.image.src = this.element.getAttribute("data-src");
    this.image.onload = () => {
      this.texture.image = this.image;
      // console.log(this.texture.image);
    };
    // this.texture = window.TEXTURES[image.getAttribute('data-src')]
  }

  createProgram() {
    this.program = new Program(this.gl, {
      fragment,
      vertex,
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
    this.mesh.position.x += this.index * this.mesh.scale.x;
    // this.mesh.rotation.z = GSAP.utils.random(-Math.PI * 0.03, Math.PI * 0.03);
  }

  createBounds({ sizes }) {
    // this.sizes = sizes;

    this.bounds = this.element.getBoundingClientRect();

    this.updateScale(sizes);
    this.updateX();
    this.updateY();
  }

  /**
   * Animations.
   */
  show(isPreloaded) {
    const delay = isPreloaded ? 2.5 : 0;

    this.timelineIn = GSAP.timeline({
      delay: GSAP.utils.random(delay, delay + 1.5),
    });

    this.timelineIn.fromTo(
      this.program.uniforms.uAlpha,
      {
        value: 0,
      },
      {
        duration: 2,
        ease: "expo.inOut",
        value: 0.4,
      },
      "start"
    );

    this.timelineIn.fromTo(
      this.mesh.position,
      {
        z: GSAP.utils.random(2, 6),
      },
      {
        duration: 2,
        ease: "expo.inOut",
        z: 0,
      },
      "start"
    );
  }

  hide() {}

  /**
   * Events.
   */
  onResize(sizes) {
    // this.extra = {
    //   x: 0,
    //   y: 0,
    // };
    this.createBounds(sizes);
    // this.updateX(scroll && scroll.x);
    // this.updateY(scroll && scroll.y);
  }

  /**
   * Loop.
   */
  updateScale({ height, width }) {
    this.height = this.bounds.height / window.innerHeight;
    this.width = this.bounds.width / window.innerWidth;

    this.mesh.scale.x = width * this.width;
    this.mesh.scale.y = height * this.height;

    this.x = this.bounds.left / window.innerWidth;
    this.y = this.bounds.top / window.innerHeight;

    console.log("x ", this.x, "y ", this.y);

    this.mesh.position.x = -width / 2 + this.mesh.scale.x / 2 + this.x * width;

    this.mesh.position.y = height / 2 - this.mesh.scale.y / 2 - this.y * height;
    console.log("Mesh.position x : ", this.mesh.position.x);
  }

  updateX(x = 0) {
    this.x = (this.bounds.left + x) / window.innerWidth;

    this.mesh.position.x =
      -this.sizes.width / 2 +
      this.mesh.scale.x / 2 +
      this.x * this.sizes.width +
      this.extra.x;
  }

  updateY(y = 0) {
    this.y = (this.bounds.top + y) / window.innerHeight;

    this.mesh.position.y =
      this.sizes.height / 2 -
      this.mesh.scale.y / 2 -
      this.y * this.sizes.height +
      this.extra.y;
  }

  update(scroll, speed) {
    this.updateX();
    this.updateY(scroll.y);

    this.program.uniforms.uSpeed.value = speed;
  }
}
