import * as THREE from "../dependencies/build/three.module.js";


import { OrbitControls } from "../dependencies/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../dependencies/examples/jsm/loaders/GLTFLoader.js";

let render_window = document.querySelector('.fleet-model');


let scene = new THREE.Scene();
scene.background = new THREE.Color( 0xcce0ff );
scene.add( new THREE.AmbientLight( 0x666666 ) );
scene.fog = new THREE.Fog( 0xcce0ff, 100, 10000 );


let camera = new THREE.PerspectiveCamera(
    60,
    render_window.getBoundingClientRect().width/render_window.getBoundingClientRect().height,
    10,
    10000
);



let renderer = new THREE.WebGLRenderer({antialias: true, autoSize: true});
renderer.setSize(render_window.getBoundingClientRect().width, render_window.getBoundingClientRect().height);


render_window.appendChild(renderer.domElement);

window.onresize = function(){
    camera.aspect = render_window.getBoundingClientRect().width/render_window.getBoundingClientRect().height;
    renderer.setSize(render_window.getBoundingClientRect().width, render_window.getBoundingClientRect().height);
    camera.updateProjectionMatrix();
}

let obj, mixer;

renderer.setClearColor(0x00ffff, 1);

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 10;
controls.maxDistance = 10000;

let loader = new GLTFLoader();

let modelLoader = (path) => {
    loader.load(path, (gltf) => {
        obj = gltf.scene;
        obj.name = "airplane";
        obj.position.y = -20;
        obj.rotation.y = 99.3;
        scene.add(obj);
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
            mixer.clipAction(clip).play();
        });
    });
}

modelLoader('Pages/Fleet/scripts/TEAM_UAV/Hexacopter/Hexacopter(uav6).gltf');


// scene.background = new THREE.Color(0x696969);

let light = new THREE.DirectionalLight( 0xffffff, 1,0 );
scene.add( light );
light.position.set(0,10,0);
light.castShadow=true;
light.shadow.camera.near = 1;
light.shadow.camera.far = 5;
light.shadow.camera.right = 1;
light.shadow.camera.left = - 1;
light.shadow.camera.top	= 1;
light.shadow.camera.bottom = -0;
light.shadow.mapSize.width = 500;
light.shadow.mapSize.height = 509;
let light_2 = new THREE.HemisphereLight(0xffffff, 0x000000, 5);
scene.add(light_2);
camera.position.set(0, 160, 300);
function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.003;
    renderer.render(scene, camera);

    controls.update();
}

animate();