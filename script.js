
//fiz camera zoom to where one line of code covers the screen

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

    //controls = new THREE.OrbitControls(camera, render.domElement);
    holder.appendChild(renderer.domElement);  
}

function createCamera() {
    camera = new THREE.PerspectiveCamera(10, width/height, 1, 1000);
    camera.position.set(0,0,15);
    // const helper = new THREE.CameraHelper(camera);
    // scene.add(helper);
}

function createRenderer() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
}

function loadCodeGraphic() {
    const loader = new THREE.JSONLoader();
    loader.load("codeGraphic.json", function(geometry, materials) {
        codeGraphic = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
        codeGraphic.position.set(.5, -6.35, 0);
        scene.add(codeGraphic);
    });
    setInterval(animateCode, 10);
    render();
}

function letThereBeLight() {
    const lights = new THREE.AmbientLight(0xffffff);
    scene.add(lights);
}

function animateCode() {
    //codeGraphic.position.y -= 0.001;
    codeGraphic.position.y -= 0.005;
     if(codeGraphic.position.y < -10.5) {
       scene.remove(scene.children[1]);
       codeGraphic.position.y = -6.35;
       scene.add(codeGraphic);
     }

}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}






