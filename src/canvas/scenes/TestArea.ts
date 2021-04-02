import {
  BoxGeometry,
  CircleGeometry,
  Color,
  DirectionalLight,
  Fog,
  HemisphereLight,
  Mesh,
  MeshLambertMaterial,
  Scene
} from 'three';

const scene = new Scene();
scene.background = new Color(0xA0A0A0);
scene.fog = new Fog(0xA0A0A0, 100, 1000);

const hemiLight = new HemisphereLight(0xFFFFFF, 0x444444);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new DirectionalLight(0xFFFFFF, 1);
dirLight.position.set(-300, 200, -100);
dirLight.castShadow = true;
scene.add(dirLight);

const cubeGeometry = new BoxGeometry();
const material = new MeshLambertMaterial({ color: 0x999999 });
const cube = new Mesh(cubeGeometry, material);
cube.castShadow = true;

scene.add(cube);

cube.rotation.z = Math.PI / 3 - 0.6;
cube.rotation.y = Math.PI / 3 - 0.2;
cube.position.y = 1.5;

const planeGeometry = new CircleGeometry(1000, 24);
const plane = new Mesh(planeGeometry, material);
plane.receiveShadow = true;

plane.rotation.x = -Math.PI / 2;

scene.add(plane);

export default scene;
