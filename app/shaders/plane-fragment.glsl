// precision highp float;

// uniform float uAlpha;


// varying vec2 vUv;

// void main() {
//   vec4 texture = texture2D(tMap, vUv);

//   gl_FragColor = texture;
//   gl_FragColor.a = uAlpha;
// }

precision highp float;
uniform sampler2D tMap;


varying vec2 vUv;

void main() {
    // gl_FragColor.rgb = vec3(0.8, 0.7, 1.0) + 0.3 * cos(vUv.xyx + uTime);
    // gl_FragColor.a = 1.0;
    vec4 texture = texture2D(tMap, vUv);
    gl_FragColor = texture;
}