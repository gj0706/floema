/*! For license information please see main.7c646bfff025e9ad6983.hot-update.js.LICENSE.txt */
"use strict";self.webpackHotUpdatefloema("main",{"./app/components/Canvas/Media.js":(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i("./node_modules/gsap/index.js"),n=i("./node_modules/ogl/src/core/Texture.js"),o=i("./node_modules/ogl/src/core/Program.js"),h=i("./node_modules/ogl/src/core/Mesh.js"),r=i("./app/shaders/home-fragment.glsl"),a=i("./app/shaders/home-vertex.glsl");function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function l(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(n=s.key,o=void 0,o=function(e,t){if("object"!==u(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t||"default");if("object"!==u(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"),"symbol"===u(o)?o:String(o)),s)}var n,o}var m=function(){function e(t){var i=t.element,s=t.geometry,n=t.gl,o=t.index,h=t.scene,r=t.sizes;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=i,this.geometry=s,this.gl=n,this.index=o,this.scene=h,this.sizes=r,this.extra={x:0,y:0},this.createTexture(),this.createProgram(),this.createMesh(),this.createBounds({sizes:this.sizes})}var t,i,u;return t=e,i=[{key:"createTexture",value:function(){var e=this;this.texture=new n.Texture(this.gl),this.image=new window.Image,this.image.crossOrigin="anonymous",this.image.src=this.element.getAttribute("data-src"),this.image.onload=function(){e.texture.image=e.image}}},{key:"createProgram",value:function(){this.program=new o.Program(this.gl,{fragment:r.default,vertex:a.default,uniforms:{tMap:{value:this.texture}}})}},{key:"createMesh",value:function(){this.mesh=new h.Mesh(this.gl,{geometry:this.geometry,program:this.program}),this.mesh.setParent(this.scene),this.mesh.scale.x=2,this.mesh.position.x+=this.index*this.mesh.scale.x}},{key:"createBounds",value:function(e){var t=e.sizes;this.bounds=this.element.getBoundingClientRect(),this.updateScale(t),this.updateX(),this.updateY()}},{key:"show",value:function(e){var t=e?2.5:0;this.timelineIn=s.default.timeline({delay:s.default.utils.random(t,t+1.5)}),this.timelineIn.fromTo(this.program.uniforms.uAlpha,{value:0},{duration:2,ease:"expo.inOut",value:.4},"start"),this.timelineIn.fromTo(this.mesh.position,{z:s.default.utils.random(2,6)},{duration:2,ease:"expo.inOut",z:0},"start")}},{key:"hide",value:function(){}},{key:"onResize",value:function(e){this.createBounds(e)}},{key:"updateScale",value:function(e){var t=e.height,i=e.width;this.height=this.bounds.height/window.innerHeight,this.width=this.bounds.width/window.innerWidth,this.mesh.scale.x=i*this.width,this.mesh.scale.y=t*this.height,this.x=this.bounds.left/window.innerWidth,this.y=this.bounds.top/window.innerHeight,console.log("x ",this.x,"y ",this.y),this.mesh.position.x=-i/2+this.mesh.scale.x/2+this.x*i,this.mesh.position.y=t/2-this.mesh.scale.y/2-this.y*t,console.log("Mesh.position x : ",this.mesh.position.x)}},{key:"updateX",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.x=(this.bounds.left+e)/window.innerWidth,this.mesh.position.x=-this.sizes.width/2+this.mesh.scale.x/2+this.x*this.sizes.width+this.extra.x}},{key:"updateY",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.y=(this.bounds.top+e)/window.innerHeight,this.mesh.position.y=this.sizes.height/2-this.mesh.scale.y/2-this.y*this.sizes.height+this.extra.y}},{key:"update",value:function(e,t){this.updateX(),this.updateY(e.y),this.program.uniforms.uSpeed.value=t}}],i&&l(t.prototype,i),u&&l(t,u),Object.defineProperty(t,"prototype",{writable:!1}),e}()}},(function(e){e.h=()=>"596d0d78055c9ab19e90"}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFDcEJoRCxLQUFLQyxNQUFNQyxDQUNmLEdBQUMsQ0FBQU0sSUFBQSxVQUFBQyxNQUVELFdBQWUsSUFBUE4sRUFBQ29ELFVBQUFDLE9BQUEsUUFBQUMsSUFBQUYsVUFBQSxHQUFBQSxVQUFBLEdBQUcsRUFDVnZELEtBQUtHLEdBQUtILEtBQUtnQyxPQUFPb0IsSUFBTWpELEdBQUtXLE9BQU9tQyxZQUV4Q2pELEtBQUswQixLQUFLSSxTQUFTM0IsRUFDakJILEtBQUtGLE1BQU1pRCxPQUFTLEVBQ3BCL0MsS0FBSzBCLEtBQUtHLE1BQU0xQixFQUFJLEVBQ3BCSCxLQUFLRyxFQUFJSCxLQUFLRixNQUFNaUQsT0FDcEIvQyxLQUFLQyxNQUFNRSxDQUNmLEdBQUMsQ0FBQUssSUFBQSxTQUFBQyxNQUVELFNBQU9pRCxFQUFRQyxHQUNiM0QsS0FBS21DLFVBQ0xuQyxLQUFLb0MsUUFBUXNCLEVBQU92RCxHQUVwQkgsS0FBS29CLFFBQVFJLFNBQVNvQyxPQUFPbkQsTUFBUWtELENBQ3ZDLHFGQUFDcEUsQ0FBQSxDQXBLdUIsa0JDTjFCc0UsRUFBb0JDLEVBQUksSUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zsb2VtYS8uL2FwcC9jb21wb25lbnRzL0NhbnZhcy9NZWRpYS5qcyIsIndlYnBhY2s6Ly9mbG9lbWEvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHU0FQIGZyb20gXCJnc2FwXCI7XG5pbXBvcnQgeyBNZXNoLCBQcm9ncmFtLCBUZXh0dXJlIH0gZnJvbSBcIm9nbFwiO1xuXG5pbXBvcnQgZnJhZ21lbnQgZnJvbSBcInNoYWRlcnMvaG9tZS1mcmFnbWVudC5nbHNsXCI7XG5pbXBvcnQgdmVydGV4IGZyb20gXCJzaGFkZXJzL2hvbWUtdmVydGV4Lmdsc2xcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVkaWEge1xuICBjb25zdHJ1Y3Rvcih7IGVsZW1lbnQsIGdlb21ldHJ5LCBnbCwgaW5kZXgsIHNjZW5lLCBzaXplcyB9KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmdlb21ldHJ5ID0gZ2VvbWV0cnk7XG4gICAgdGhpcy5nbCA9IGdsO1xuICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICB0aGlzLnNjZW5lID0gc2NlbmU7XG4gICAgdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy5leHRyYSA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgIH07XG5cbiAgICB0aGlzLmNyZWF0ZVRleHR1cmUoKTtcbiAgICB0aGlzLmNyZWF0ZVByb2dyYW0oKTtcbiAgICB0aGlzLmNyZWF0ZU1lc2goKTtcbiAgICB0aGlzLmNyZWF0ZUJvdW5kcyh7XG4gICAgICBzaXplczogdGhpcy5zaXplcyxcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVRleHR1cmUoKSB7XG4gICAgdGhpcy50ZXh0dXJlID0gbmV3IFRleHR1cmUodGhpcy5nbCk7XG4gICAgdGhpcy5pbWFnZSA9IG5ldyB3aW5kb3cuSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLmNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIjtcbiAgICB0aGlzLmltYWdlLnNyYyA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNyY1wiKTtcbiAgICB0aGlzLmltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMudGV4dHVyZS5pbWFnZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRleHR1cmUuaW1hZ2UpO1xuICAgIH07XG4gICAgLy8gdGhpcy50ZXh0dXJlID0gd2luZG93LlRFWFRVUkVTW2ltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKV1cbiAgfVxuXG4gIGNyZWF0ZVByb2dyYW0oKSB7XG4gICAgdGhpcy5wcm9ncmFtID0gbmV3IFByb2dyYW0odGhpcy5nbCwge1xuICAgICAgZnJhZ21lbnQsXG4gICAgICB2ZXJ0ZXgsXG4gICAgICB1bmlmb3Jtczoge1xuICAgICAgICB0TWFwOiB7IHZhbHVlOiB0aGlzLnRleHR1cmUgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVNZXNoKCkge1xuICAgIHRoaXMubWVzaCA9IG5ldyBNZXNoKHRoaXMuZ2wsIHtcbiAgICAgIGdlb21ldHJ5OiB0aGlzLmdlb21ldHJ5LFxuICAgICAgcHJvZ3JhbTogdGhpcy5wcm9ncmFtLFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNoLnNldFBhcmVudCh0aGlzLnNjZW5lKTtcbiAgICB0aGlzLm1lc2guc2NhbGUueCA9IDI7XG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnggKz0gdGhpcy5pbmRleCAqIHRoaXMubWVzaC5zY2FsZS54O1xuICAgIC8vIHRoaXMubWVzaC5yb3RhdGlvbi56ID0gR1NBUC51dGlscy5yYW5kb20oLU1hdGguUEkgKiAwLjAzLCBNYXRoLlBJICogMC4wMyk7XG4gIH1cblxuICBjcmVhdGVCb3VuZHMoeyBzaXplcyB9KSB7XG4gICAgLy8gdGhpcy5zaXplcyA9IHNpemVzO1xuXG4gICAgdGhpcy5ib3VuZHMgPSB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0aGlzLnVwZGF0ZVNjYWxlKHNpemVzKTtcbiAgICB0aGlzLnVwZGF0ZVgoKTtcbiAgICB0aGlzLnVwZGF0ZVkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbmltYXRpb25zLlxuICAgKi9cbiAgc2hvdyhpc1ByZWxvYWRlZCkge1xuICAgIGNvbnN0IGRlbGF5ID0gaXNQcmVsb2FkZWQgPyAyLjUgOiAwO1xuXG4gICAgdGhpcy50aW1lbGluZUluID0gR1NBUC50aW1lbGluZSh7XG4gICAgICBkZWxheTogR1NBUC51dGlscy5yYW5kb20oZGVsYXksIGRlbGF5ICsgMS41KSxcbiAgICB9KTtcblxuICAgIHRoaXMudGltZWxpbmVJbi5mcm9tVG8oXG4gICAgICB0aGlzLnByb2dyYW0udW5pZm9ybXMudUFscGhhLFxuICAgICAge1xuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICBlYXNlOiBcImV4cG8uaW5PdXRcIixcbiAgICAgICAgdmFsdWU6IDAuNCxcbiAgICAgIH0sXG4gICAgICBcInN0YXJ0XCJcbiAgICApO1xuXG4gICAgdGhpcy50aW1lbGluZUluLmZyb21UbyhcbiAgICAgIHRoaXMubWVzaC5wb3NpdGlvbixcbiAgICAgIHtcbiAgICAgICAgejogR1NBUC51dGlscy5yYW5kb20oMiwgNiksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgZWFzZTogXCJleHBvLmluT3V0XCIsXG4gICAgICAgIHo6IDAsXG4gICAgICB9LFxuICAgICAgXCJzdGFydFwiXG4gICAgKTtcbiAgfVxuXG4gIGhpZGUoKSB7fVxuXG4gIC8qKlxuICAgKiBFdmVudHMuXG4gICAqL1xuICBvblJlc2l6ZShzaXplcykge1xuICAgIC8vIHRoaXMuZXh0cmEgPSB7XG4gICAgLy8gICB4OiAwLFxuICAgIC8vICAgeTogMCxcbiAgICAvLyB9O1xuICAgIHRoaXMuY3JlYXRlQm91bmRzKHNpemVzKTtcbiAgICAvLyB0aGlzLnVwZGF0ZVgoc2Nyb2xsICYmIHNjcm9sbC54KTtcbiAgICAvLyB0aGlzLnVwZGF0ZVkoc2Nyb2xsICYmIHNjcm9sbC55KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29wLlxuICAgKi9cbiAgdXBkYXRlU2NhbGUoeyBoZWlnaHQsIHdpZHRoIH0pIHtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMuYm91bmRzLmhlaWdodCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gdGhpcy5ib3VuZHMud2lkdGggLyB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgIHRoaXMubWVzaC5zY2FsZS54ID0gd2lkdGggKiB0aGlzLndpZHRoO1xuICAgIHRoaXMubWVzaC5zY2FsZS55ID0gaGVpZ2h0ICogdGhpcy5oZWlnaHQ7XG5cbiAgICB0aGlzLnggPSB0aGlzLmJvdW5kcy5sZWZ0IC8gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy55ID0gdGhpcy5ib3VuZHMudG9wIC8gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gICAgY29uc29sZS5sb2coXCJ4IFwiLCB0aGlzLngsIFwieSBcIiwgdGhpcy55KTtcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi54ID0gLXdpZHRoIC8gMiArIHRoaXMubWVzaC5zY2FsZS54IC8gMiArIHRoaXMueCAqIHdpZHRoO1xuXG4gICAgdGhpcy5tZXNoLnBvc2l0aW9uLnkgPSBoZWlnaHQgLyAyIC0gdGhpcy5tZXNoLnNjYWxlLnkgLyAyIC0gdGhpcy55ICogaGVpZ2h0O1xuICAgIGNvbnNvbGUubG9nKFwiTWVzaC5wb3NpdGlvbiB4IDogXCIsIHRoaXMubWVzaC5wb3NpdGlvbi54KTtcbiAgfVxuXG4gIHVwZGF0ZVgoeCA9IDApIHtcbiAgICB0aGlzLnggPSAodGhpcy5ib3VuZHMubGVmdCArIHgpIC8gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICB0aGlzLm1lc2gucG9zaXRpb24ueCA9XG4gICAgICAtdGhpcy5zaXplcy53aWR0aCAvIDIgK1xuICAgICAgdGhpcy5tZXNoLnNjYWxlLnggLyAyICtcbiAgICAgIHRoaXMueCAqIHRoaXMuc2l6ZXMud2lkdGggK1xuICAgICAgdGhpcy5leHRyYS54O1xuICB9XG5cbiAgdXBkYXRlWSh5ID0gMCkge1xuICAgIHRoaXMueSA9ICh0aGlzLmJvdW5kcy50b3AgKyB5KSAvIHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIHRoaXMubWVzaC5wb3NpdGlvbi55ID1cbiAgICAgIHRoaXMuc2l6ZXMuaGVpZ2h0IC8gMiAtXG4gICAgICB0aGlzLm1lc2guc2NhbGUueSAvIDIgLVxuICAgICAgdGhpcy55ICogdGhpcy5zaXplcy5oZWlnaHQgK1xuICAgICAgdGhpcy5leHRyYS55O1xuICB9XG5cbiAgdXBkYXRlKHNjcm9sbCwgc3BlZWQpIHtcbiAgICB0aGlzLnVwZGF0ZVgoKTtcbiAgICB0aGlzLnVwZGF0ZVkoc2Nyb2xsLnkpO1xuXG4gICAgdGhpcy5wcm9ncmFtLnVuaWZvcm1zLnVTcGVlZC52YWx1ZSA9IHNwZWVkO1xuICB9XG59XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1OTZkMGQ3ODA1NWM5YWIxOWU5MFwiKSJdLCJuYW1lcyI6WyJNZWRpYSIsIl9yZWYiLCJlbGVtZW50IiwiZ2VvbWV0cnkiLCJnbCIsImluZGV4Iiwic2NlbmUiLCJzaXplcyIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJleHRyYSIsIngiLCJ5IiwiY3JlYXRlVGV4dHVyZSIsImNyZWF0ZVByb2dyYW0iLCJjcmVhdGVNZXNoIiwiY3JlYXRlQm91bmRzIiwia2V5IiwidmFsdWUiLCJfdGhpcyIsInRleHR1cmUiLCJUZXh0dXJlIiwiaW1hZ2UiLCJ3aW5kb3ciLCJJbWFnZSIsImNyb3NzT3JpZ2luIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwib25sb2FkIiwicHJvZ3JhbSIsIlByb2dyYW0iLCJmcmFnbWVudCIsInZlcnRleCIsInVuaWZvcm1zIiwidE1hcCIsIm1lc2giLCJNZXNoIiwic2V0UGFyZW50Iiwic2NhbGUiLCJwb3NpdGlvbiIsIl9yZWYyIiwiYm91bmRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidXBkYXRlU2NhbGUiLCJ1cGRhdGVYIiwidXBkYXRlWSIsImlzUHJlbG9hZGVkIiwiZGVsYXkiLCJ0aW1lbGluZUluIiwiR1NBUCIsImZyb21UbyIsInVBbHBoYSIsImR1cmF0aW9uIiwiZWFzZSIsInoiLCJfcmVmMyIsImhlaWdodCIsIndpZHRoIiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwibGVmdCIsInRvcCIsImNvbnNvbGUiLCJsb2ciLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJzcGVlZCIsInVTcGVlZCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJoIl0sInNvdXJjZVJvb3QiOiIifQ==