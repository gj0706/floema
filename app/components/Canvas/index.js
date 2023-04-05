import { Renderer, Camera, Transform } from "ogl";

import Home from "./Home";
// import About from "./About";
// import Collections from "./Collections";

export default class Canvas {
  constructor() {
    // this.x = {
    //   start: 0,
    //   distance: 0,
    //   end: 0,
    // };

    // this.y = {
    //   start: 0,
    //   distance: 0,
    //   end: 0,
    // };

    this.createRenderer();
    this.createCamera();
    this.createScene();
    this.onResize();
    this.createHome();
    // this.createCube();
  }

  createRenderer() {
    this.renderer = new Renderer();

    this.gl = this.renderer.gl;

    document.body.appendChild(this.gl.canvas);
  }

  createCamera() {
    this.camera = new Camera(this.gl);
    this.camera.position.z = 5;
  }

  // createCube = () => {
  //   const geometry = new Box(this.gl);
  //   const program = new Program(this.gl, {
  //     vertex,
  //     fragment,
  //   });
  //   this.mesh = new Mesh(this.gl, {
  //     geometry,
  //     program,
  //   });
  //   this.mesh.setParent(this.scene);
  // };

  createScene() {
    this.scene = new Transform();
  }

  /**
   * Home.
   */
  createHome() {
    this.home = new Home({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes,
    });
  }

  /**
   * About.
   */
  createAbout() {
    this.about = new About({
      gl: this.gl,
      scene: this.scene,
      sizes: this.sizes,
    });
  }

  /**
   * Collections.
   */
  createCollections() {
    this.collections = new Collections({
      camera: this.camera,
      gl: this.gl,
      renderer: this.renderer,
      scene: this.scene,
      sizes: this.sizes,
      transition: this.transition,
    });
  }

  /**
   * Events.
   */

  onResize() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.camera.perspective({
      aspect: window.innerWidth / window.innerHeight,
    });

    const fov = (this.camera.fov = Math.PI / 100);
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;

    this.sizes = {
      height,
      width,
    };

    if (this.home) {
      this.home.onResize({
        sizes: this.sizes,
      });
    }
  }

  /**
   * Loop.
   */
  update() {
    // this.mesh.rotation.x += 0.01;
    // this.mesh.rotation.y += 0.01;
    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    });
  }
}
