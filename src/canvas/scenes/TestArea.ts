import {
  BoxGeometry,
  HemisphereLight,
  Mesh,
  MeshLambertMaterial,
  Scene
} from 'three';

const scene = new Scene();

const hemiLight = new HemisphereLight(0xFFFFFF, 0x444444);
scene.add(hemiLight);

const geometry = new BoxGeometry();
const material = new MeshLambertMaterial({ color: 0xFFFFFF });
const cube = new Mesh(geometry, material);
cube.rotation.z = Math.PI / 3 - 0.6;
cube.rotation.y = Math.PI / 3 - 0.2;
cube.position.y = 1;
scene.add(cube);

export default scene;
