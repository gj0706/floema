/*! For license information please see main.3cdee52a2e6354c5ea83.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/index.js":(e,r,t)=>{t.r(r),t.d(r,{default:()=>d});var n=t("./node_modules/ogl/src/extras/Box.js"),o=t("./node_modules/ogl/src/core/Program.js"),i=t("./node_modules/ogl/src/core/Mesh.js"),s=t("./node_modules/ogl/src/core/Renderer.js"),a=t("./node_modules/ogl/src/core/Camera.js"),c=t("./node_modules/ogl/src/core/Transform.js");function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function h(e){var r=function(e,r){if("object"!==l(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===l(r)?r:String(r)}Object(function(){var e=new Error("Cannot find module 'shaders/vertex.glsl'");throw e.code="MODULE_NOT_FOUND",e}()),Object(function(){var e=new Error("Cannot find module 'shaders/fragment.glsl'");throw e.code="MODULE_NOT_FOUND",e}());var d=function(){function e(){var r,t,s,a=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,s=function(){new n.Box(a.gl),new o.Program(a.gl,{vertex:Object(function(){var e=new Error("Cannot find module 'shaders/vertex.glsl'");throw e.code="MODULE_NOT_FOUND",e}()),fragment:Object(function(){var e=new Error("Cannot find module 'shaders/fragment.glsl'");throw e.code="MODULE_NOT_FOUND",e}())}),a.mesh=new i.Mesh(a.gl,{geometry:a.geometry,program:a.program}),a.mesh.setParent(a.scene)},(t=h(t="createCube"))in r?Object.defineProperty(r,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):r[t]=s,this.createRenderer(),this.createCamera(),this.createScene(),this.createCube()}var r,t,l;return r=e,(t=[{key:"createRenderer",value:function(){this.renderer=new s.Renderer,this.gl=this.renderer.gl,document.body.appendChild(this.gl.canvas)}},{key:"createCamera",value:function(){this.camera=new a.Camera(this.gl),this.camera.position.z=5}},{key:"createScene",value:function(){this.scene=new c.Transform}},{key:"createHome",value:function(){this.home=new Home({gl:this.gl,scene:this.scene,sizes:this.sizes})}},{key:"createAbout",value:function(){this.about=new About({gl:this.gl,scene:this.scene,sizes:this.sizes})}},{key:"createCollections",value:function(){this.collections=new Collections({camera:this.camera,gl:this.gl,renderer:this.renderer,scene:this.scene,sizes:this.sizes,transition:this.transition})}},{key:"onResize",value:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.perspective({aspect:window.innerWidth/window.innerHeight})}},{key:"update",value:function(){this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.01,this.renderer.render({camera:this.camera,scene:this.scene})}}])&&u(r.prototype,t),l&&u(r,l),Object.defineProperty(r,"prototype",{writable:!1}),e}()}},(function(e){e.h=()=>"c806fdb9a7ec4a43bcf2"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zY2RlZTUyYTJlNjM1NGM1ZWE4My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7KzBDQU1BLElBRXFCQSxFQUFNLFdBQ3pCLFNBQUFBLElBQWMsVUFBQUMsRUFBQSxrR0FBQUMsQ0FBQSxLQUFBRixLQUFBLE9BaUNELFdBQ00sSUFBSUcsRUFBQUEsSUFBSUYsRUFBS0csSUFDZCxJQUFJQyxFQUFBQSxRQUFRSixFQUFLRyxHQUFJLENBQ25DRSxPQUFBQSxPQUFBQSxXQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxNQUFBQSw0Q0FBQUEsTUFBQUEsRUFBQUEsS0FBQUEsbUJBQUFBLENBQUFBLENBQUFBLElBQ0FDLFNBQUFBLE9BQUFBLFdBQUFBLElBQUFBLEVBQUFBLElBQUFBLE1BQUFBLDhDQUFBQSxNQUFBQSxFQUFBQSxLQUFBQSxtQkFBQUEsQ0FBQUEsQ0FBQUEsTUFFRk4sRUFBS08sS0FBTyxJQUFJQyxFQUFBQSxLQUFLUixFQUFLRyxHQUFJLENBQzVCTSxTQUFVVCxFQUFLUyxTQUNmQyxRQUFTVixFQUFLVSxVQUVoQlYsRUFBS08sS0FBS0ksVUFBVVgsRUFBS1ksTUFDM0IsU0E1Q2MseUdBYVpDLEtBQUtDLGlCQUNMRCxLQUFLRSxlQUNMRixLQUFLRyxjQUNMSCxLQUFLSSxZQUVQLFdBMEZDLFNBMUZBbEIsS0FBQSxFQUFBbUIsSUFBQSxpQkFBQUMsTUFFRCxXQUNFTixLQUFLTyxTQUFXLElBQUlDLEVBQUFBLFNBRXBCUixLQUFLVixHQUFLVSxLQUFLTyxTQUFTakIsR0FFeEJtQixTQUFTQyxLQUFLQyxZQUFZWCxLQUFLVixHQUFHc0IsT0FDcEMsR0FBQyxDQUFBUCxJQUFBLGVBQUFDLE1BRUQsV0FDRU4sS0FBS2EsT0FBUyxJQUFJQyxFQUFBQSxPQUFPZCxLQUFLVixJQUM5QlUsS0FBS2EsT0FBT0UsU0FBU0MsRUFBSSxDQUMzQixHQUFDLENBQUFYLElBQUEsY0FBQUMsTUFlRCxXQUNFTixLQUFLRCxNQUFRLElBQUlrQixFQUFBQSxTQUNuQixHQUVBLENBQUFaLElBQUEsYUFBQUMsTUFHQSxXQUNFTixLQUFLa0IsS0FBTyxJQUFJQyxLQUFLLENBQ25CN0IsR0FBSVUsS0FBS1YsR0FDVFMsTUFBT0MsS0FBS0QsTUFDWnFCLE1BQU9wQixLQUFLb0IsT0FFaEIsR0FFQSxDQUFBZixJQUFBLGNBQUFDLE1BR0EsV0FDRU4sS0FBS3FCLE1BQVEsSUFBSUMsTUFBTSxDQUNyQmhDLEdBQUlVLEtBQUtWLEdBQ1RTLE1BQU9DLEtBQUtELE1BQ1pxQixNQUFPcEIsS0FBS29CLE9BRWhCLEdBRUEsQ0FBQWYsSUFBQSxvQkFBQUMsTUFHQSxXQUNFTixLQUFLdUIsWUFBYyxJQUFJQyxZQUFZLENBQ2pDWCxPQUFRYixLQUFLYSxPQUNidkIsR0FBSVUsS0FBS1YsR0FDVGlCLFNBQVVQLEtBQUtPLFNBQ2ZSLE1BQU9DLEtBQUtELE1BQ1pxQixNQUFPcEIsS0FBS29CLE1BQ1pLLFdBQVl6QixLQUFLeUIsWUFFckIsR0FFQSxDQUFBcEIsSUFBQSxXQUFBQyxNQUlBLFdBQ0VOLEtBQUtPLFNBQVNtQixRQUFRQyxPQUFPQyxXQUFZRCxPQUFPRSxhQUVoRDdCLEtBQUthLE9BQU9pQixZQUFZLENBQ3RCQyxPQUFRSixPQUFPQyxXQUFhRCxPQUFPRSxhQUV2QyxHQUVBLENBQUF4QixJQUFBLFNBQUFDLE1BR0EsV0FDRU4sS0FBS04sS0FBS3NDLFNBQVNDLEdBQUssSUFDeEJqQyxLQUFLTixLQUFLc0MsU0FBU0UsR0FBSyxJQUN4QmxDLEtBQUtPLFNBQVM0QixPQUFPLENBQ25CdEIsT0FBUWIsS0FBS2EsT0FDYmQsTUFBT0MsS0FBS0QsT0FFaEIsb0ZBQUNiLENBQUEsQ0E3R3dCLGtCQ1IzQmtELEVBQW9CQyxFQUFJLElBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbG9lbWEvLi9hcHAvY29tcG9uZW50cy9DYW52YXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZmxvZW1hL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW1lcmEsIFJlbmRlcmVyLCBUcmFuc2Zvcm0sIEJveCwgTWVzaCwgUHJvZ3JhbSB9IGZyb20gXCJvZ2xcIjtcbmltcG9ydCB2ZXJ0ZXggZnJvbSBcInNoYWRlcnMvdmVydGV4Lmdsc2xcIjtcbmltcG9ydCBmcmFnbWVudCBmcm9tIFwic2hhZGVycy9mcmFnbWVudC5nbHNsXCI7XG5cbi8vIGltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0J1xuLy8gaW1wb3J0IENvbGxlY3Rpb25zIGZyb20gJy4vQ29sbGVjdGlvbnMnXG4vLyBpbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbnZhcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRoaXMueCA9IHtcbiAgICAvLyAgIHN0YXJ0OiAwLFxuICAgIC8vICAgZGlzdGFuY2U6IDAsXG4gICAgLy8gICBlbmQ6IDAsXG4gICAgLy8gfTtcblxuICAgIC8vIHRoaXMueSA9IHtcbiAgICAvLyAgIHN0YXJ0OiAwLFxuICAgIC8vICAgZGlzdGFuY2U6IDAsXG4gICAgLy8gICBlbmQ6IDAsXG4gICAgLy8gfTtcblxuICAgIHRoaXMuY3JlYXRlUmVuZGVyZXIoKTtcbiAgICB0aGlzLmNyZWF0ZUNhbWVyYSgpO1xuICAgIHRoaXMuY3JlYXRlU2NlbmUoKTtcbiAgICB0aGlzLmNyZWF0ZUN1YmUoKTtcbiAgICAvLyB0aGlzLm9uUmVzaXplKCk7XG4gIH1cblxuICBjcmVhdGVSZW5kZXJlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG5cbiAgICB0aGlzLmdsID0gdGhpcy5yZW5kZXJlci5nbDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5nbC5jYW52YXMpO1xuICB9XG5cbiAgY3JlYXRlQ2FtZXJhKCkge1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmdsKTtcbiAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcbiAgfVxuXG4gIGNyZWF0ZUN1YmUgPSAoKSA9PiB7XG4gICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQm94KHRoaXMuZ2wpO1xuICAgIGNvbnN0IHByb2dyYW0gPSBuZXcgUHJvZ3JhbSh0aGlzLmdsLCB7XG4gICAgICB2ZXJ0ZXgsXG4gICAgICBmcmFnbWVudCxcbiAgICB9KTtcbiAgICB0aGlzLm1lc2ggPSBuZXcgTWVzaCh0aGlzLmdsLCB7XG4gICAgICBnZW9tZXRyeTogdGhpcy5nZW9tZXRyeSxcbiAgICAgIHByb2dyYW06IHRoaXMucHJvZ3JhbSxcbiAgICB9KTtcbiAgICB0aGlzLm1lc2guc2V0UGFyZW50KHRoaXMuc2NlbmUpO1xuICB9O1xuXG4gIGNyZWF0ZVNjZW5lKCkge1xuICAgIHRoaXMuc2NlbmUgPSBuZXcgVHJhbnNmb3JtKCk7XG4gIH1cblxuICAvKipcbiAgICogSG9tZS5cbiAgICovXG4gIGNyZWF0ZUhvbWUoKSB7XG4gICAgdGhpcy5ob21lID0gbmV3IEhvbWUoe1xuICAgICAgZ2w6IHRoaXMuZ2wsXG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHNpemVzOiB0aGlzLnNpemVzLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFib3V0LlxuICAgKi9cbiAgY3JlYXRlQWJvdXQoKSB7XG4gICAgdGhpcy5hYm91dCA9IG5ldyBBYm91dCh7XG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgc2l6ZXM6IHRoaXMuc2l6ZXMsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbnMuXG4gICAqL1xuICBjcmVhdGVDb2xsZWN0aW9ucygpIHtcbiAgICB0aGlzLmNvbGxlY3Rpb25zID0gbmV3IENvbGxlY3Rpb25zKHtcbiAgICAgIGNhbWVyYTogdGhpcy5jYW1lcmEsXG4gICAgICBnbDogdGhpcy5nbCxcbiAgICAgIHJlbmRlcmVyOiB0aGlzLnJlbmRlcmVyLFxuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICAgIHRyYW5zaXRpb246IHRoaXMudHJhbnNpdGlvbixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcblxuICAgIHRoaXMuY2FtZXJhLnBlcnNwZWN0aXZlKHtcbiAgICAgIGFzcGVjdDogd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTG9vcC5cbiAgICovXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1lc2gucm90YXRpb24ueCArPSAwLjAxO1xuICAgIHRoaXMubWVzaC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoe1xuICAgICAgY2FtZXJhOiB0aGlzLmNhbWVyYSxcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgIH0pO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjODA2ZmRiOWE3ZWM0YTQzYmNmMlwiKSJdLCJuYW1lcyI6WyJDYW52YXMiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIkJveCIsImdsIiwiUHJvZ3JhbSIsInZlcnRleCIsImZyYWdtZW50IiwibWVzaCIsIk1lc2giLCJnZW9tZXRyeSIsInByb2dyYW0iLCJzZXRQYXJlbnQiLCJzY2VuZSIsInRoaXMiLCJjcmVhdGVSZW5kZXJlciIsImNyZWF0ZUNhbWVyYSIsImNyZWF0ZVNjZW5lIiwiY3JlYXRlQ3ViZSIsImtleSIsInZhbHVlIiwicmVuZGVyZXIiLCJSZW5kZXJlciIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2FudmFzIiwiY2FtZXJhIiwiQ2FtZXJhIiwicG9zaXRpb24iLCJ6IiwiVHJhbnNmb3JtIiwiaG9tZSIsIkhvbWUiLCJzaXplcyIsImFib3V0IiwiQWJvdXQiLCJjb2xsZWN0aW9ucyIsIkNvbGxlY3Rpb25zIiwidHJhbnNpdGlvbiIsInNldFNpemUiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwZXJzcGVjdGl2ZSIsImFzcGVjdCIsInJvdGF0aW9uIiwieCIsInkiLCJyZW5kZXIiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiaCJdLCJzb3VyY2VSb290IjoiIn0=