import * as THREE from "../dependencies/build/three.module.js";

import { OrbitControls } from "../dependencies/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "../dependencies/examples/jsm/loaders/GLTFLoader.js";

let clock, renderer, obj, mixer, controls, scene, camera, loader;

function init(domElement) {
  let render_window = domElement;
  clock = new THREE.Clock();
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xcce0ff);
  scene.add(new THREE.AmbientLight(0x666666));
  scene.fog = new THREE.Fog(0xcce0ff, 100, 10000);

  camera = new THREE.PerspectiveCamera(
    60,
    render_window.getBoundingClientRect().width /
      render_window.getBoundingClientRect().height,
    10,
    10000
  );

  camera.position.set(0, 150, 500);

  renderer = new THREE.WebGLRenderer({ antialias: true, autoSize: true });
  renderer.setSize(
    render_window.getBoundingClientRect().width,
    render_window.getBoundingClientRect().height
  );

  render_window.appendChild(renderer.domElement);

  window.onresize = function () {
    camera.aspect =
      render_window.getBoundingClientRect().width /
      render_window.getBoundingClientRect().height;
    renderer.setSize(
      render_window.getBoundingClientRect().width,
      render_window.getBoundingClientRect().height
    );
    camera.updateProjectionMatrix();
  };

  renderer.setClearColor(0x00ffff, 1);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 50;
  controls.maxDistance = 1000;
  controls.maxPolarAngle = Math.PI * 0.5;

  loader = new GLTFLoader();
  let textureLoader = new THREE.TextureLoader();
  const groundTexture = textureLoader.load("Pages/Fleet/assets/hex.png");
  groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(110, 110);
  groundTexture.anisotropy = 20;
  groundTexture.encoding = THREE.sRGBEncoding;

  const groundMaterial = new THREE.MeshLambertMaterial({ map: groundTexture });

  let mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(20000, 20000),
    groundMaterial
  );
  mesh.position.y = -100;
  mesh.rotation.x = -Math.PI / 2;
  mesh.receiveShadow = true;
  scene.add(mesh);

  // scene.background = new THREE.Color(0x696969);

  let light = new THREE.DirectionalLight(0xffffff, 0.5, 0);
  scene.add(light);
  light.position.set(0, 10, 0);
  light.castShadow = true;
  light.shadow.camera.near = 1;
  light.shadow.camera.far = 5;
  light.shadow.camera.right = 1;
  light.shadow.camera.left = -1;
  light.shadow.camera.top = 1;
  light.shadow.camera.bottom = -0;
  light.shadow.mapSize.width = 500;
  light.shadow.mapSize.height = 509;
//   let light_2 = new THREE.HemisphereLight(0xffffff, 0x000000, 1);
//   scene.add(light_2);

  // scene.add( new THREE.AmbientLight( 0xffffff ) );

  let lightGenerator = (x, y, z, intensity) => {
    const light = new THREE.DirectionalLight(0xdfebff, intensity);
    light.position.set(x, y, z);
    light.position.multiplyScalar(2);

    light.castShadow = true;

    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;

    const d = 300;

    light.shadow.camera.left = -d;
    light.shadow.camera.right = d;
    light.shadow.camera.top = d;
    light.shadow.camera.bottom = -d;

    light.shadow.camera.far = 3000;

    scene.add(light);
  };

  lightGenerator(150, 0, 100, 1);
  lightGenerator(-100, 0, -100, 1);
  lightGenerator(100, 0, -100, 1);
  lightGenerator(-150, 0, 100, 1);

  renderer.shadowMap.enabled = true;
  renderer.setPixelRatio(window.devicePixelRatio);
}

let modelLoader = (
  path,
  custom_position = 20,
  camera_x = 0,
  camera_y = 150,
  camera_z = 400
) => {
  camera.position.set(camera_x, camera_y, camera_z);
  loader.load(path, (gltf) => {
    obj = gltf.scene;
    obj.name = "object";
    obj.position.y = custom_position;
    obj.rotation.y = 99.3;
    console.log(obj.animations);
    scene.add(obj);
    mixer = new THREE.AnimationMixer(gltf.scene);
    gltf.animations.forEach((clip) => {
      mixer.clipAction(clip).play();
    });
  });
};

function animate() {
  requestAnimationFrame(animate);
  obj.rotation.y += 0.003;
  renderer.render(scene, camera);
  mixer.update(clock.getDelta());
  controls.update();
}

let modelToggler = (url, camera_position, x, y, z) => {
  console.log("process");
  let selected = scene.getObjectByName(obj.name);
  scene.remove(selected);
  modelLoader(url, camera_position, x, y, z);
};

let modelInitialize = (url) => {
  console.log("hello");
  modelLoader(url, -30, 0, 100, 300);
  animate();
};

export { init, modelInitialize, modelToggler };
