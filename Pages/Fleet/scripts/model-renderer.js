import * as THREE from "../dependencies/build/three.module.js";


import { OrbitControls } from "../dependencies/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../dependencies/examples/jsm/loaders/GLTFLoader.js";

let render_window = document.querySelector('.fleet-model');


let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    60,
    render_window.getBoundingClientRect().width/render_window.getBoundingClientRect().height,
    0.01,
    100
);



let renderer = new THREE.WebGLRenderer({antialias: true, autoSize: true});
renderer.setSize(render_window.getBoundingClientRect().width, render_window.getBoundingClientRect().height);


render_window.appendChild(renderer.domElement);

window.onresize = function(){
    camera.aspect = render_window.getBoundingClientRect().width/render_window.getBoundingClientRect().height;
    renderer.setSize(render_window.getBoundingClientRect().width, render_window.getBoundingClientRect().height);
    camera.updateProjectionMatrix();
}

let obj;

const controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 10;

let loader = new GLTFLoader();

let modelloader = () => {
    loader.load('Pages/Fleet/scripts/Forest Ranger/Forest ranger.gltf', (gltf) => {
        obj = gltf.scene;
        obj.name = "airplane";
        scene.add(obj);
        mixer = new THREE.AnimationMixer( obj.scene );
        obj.animations.forEach( ( clip ) => {
            mixer.clipAction( clip ).play();
        } );
    });
}

modelloader();


scene.background = new THREE.Color(0x696969);

let light = new THREE.HemisphereLight(0xffffff, 0x000000, 7);
scene.add(light);
camera.position.set(0, 50, 250);
function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.003;
    renderer.render(scene, camera);

    controls.update();
}

animate();
