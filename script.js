const holder = document.getElementById('canvasHolder');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,  700 / 250, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(700, 250);
holder.appendChild(renderer.domElement);
console.log(renderer);

console.log(renderer.domElement);