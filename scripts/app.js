//global configuration
const holder = document.getElementById('canvasHolder');
let codeGraphic, scene, camera, renderer, controls;
const width = 1000;
const height = 250;


window.onload = function() {
    init();
}

//initalize scene and appends it to DOM
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
    renderer = new THREE.WebGLRenderer({ //renderer configured for white background
        antialias: true,
        alpha: true
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1);
}

function loadCodeGraphic() {
    const loader = new THREE.JSONLoader();
    loader.load("scripts/codeGraphic.json", function(geometry, materials) {
        codeGraphic = new THREE.Mesh(geometry, new THREE.MultiMaterial(materials));
        codeGraphic.position.set(.5, -1.35, 0);
        scene.add(codeGraphic);
    });
    render();
    setInterval(animateCode, 10);
   
}

function letThereBeLight() {
    const lights = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    scene.add(lights);
}

//moves the 0's and 1's graphic down the screen 
function animateCode() {
    codeGraphic.position.y -= 0.005;
     if(codeGraphic.position.y < -10.95) {
       scene.remove(scene.children[1]);
       codeGraphic.position.y = -1.35;
       scene.add(codeGraphic);
     }
}

function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
