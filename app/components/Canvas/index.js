import { Renderer, Camera, Transform, Box, Program, Mesh } from "ogl"; // import vertex from "./shaders/vertex.glsl";
// import fragment from "./shaders/fragment.glsl";

// import About from './About'
// import Collections from './Collections'
// import Home from './Home'

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
    this.createCube();
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

  createCube = () => {
    const geometry = new Box(this.gl);
    const program = new Program(this.gl, {
      vertex: `
        attribute vec3 position;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        void main() {
          gl_FragColor = vec4(1.0);
        }
      `,
    });
    this.mesh = new Mesh(this.gl, {
      geometry,
      program,
    });
    this.mesh.setParent(this.scene);
  };

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
  }

  /**
   * Loop.
   */
  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.renderer.render({
      camera: this.camera,
      scene: this.scene,
    });
  }
}
