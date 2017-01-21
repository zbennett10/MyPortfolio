

const holder = document.getElementById('canvasHolder');
let codeGraphic, scene, camera, renderer, controls;
const width = 1000;
const height = 250;


window.onload = function() {
    init();
}

function init() {
    scene = new THREE.Scene();
    createCamera();
    createRenderer();
    letThereBeLight();
    loadCodeGraphic();

    controls = new THREE.OrbitControls(camera, render.domElement);
    console.log(controls);
    holder.appendChild(renderer.domElement);  
}

function createCamera() {
    camera = new THREE.PerspectiveCamera(5, width/height, 1, 500);
    camera.position.set(0,0,150);
    camera.lookAt(scene.position);
    
}

function createRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
}

function loadCodeGraphic() {
    const loader = new THREE.JSONLoader();
    loader.load("codeGraphic.json", function(geometry, materials) {
        codeGraphic = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
        scene.add(codeGraphic);
    });
    render();
}

function letThereBeLight() {
    const lights = new THREE.AmbientLight(0xffffff);
    scene.add(lights);
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}




