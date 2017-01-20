

const holder = document.getElementById('canvasHolder');

window.onload = function() {
    attachRenderer();
}

function attachRenderer() {
const renderer = new THREE.WebGLRenderer();
renderer.setSize(1000, 250);
holder.appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(45, 1000 / 250, 1, 500);
camera.position.set(0,0,100);
camera.lookAt(new THREE.Vector3(150,0,0));
const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({color: 0x00ff00});
const geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3(0,0,0));
//geometry.vertices.push(new THREE.Vector3(0,10,0));
geometry.vertices.push(new THREE.Vector3(0,10,0));
geometry.vertices.push(new THREE.Vector3(-1,7,0));

const line = new THREE.Line(geometry, material);
scene.add(line);
renderer.render(scene, camera);

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();
}
