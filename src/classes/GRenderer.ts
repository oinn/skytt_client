import {
  Camera,
  PCFShadowMap,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';
import GControls from '@/classes/GControls';
import FPSMeter from '@/classes/FPSMeter';

export default class GRenderer extends WebGLRenderer {
  scene: Scene;

  camera: Camera;

  controls: GControls;

  fPSMeter: FPSMeter;

  constructor(element: HTMLElement, scene: Scene, camera: Camera, controls: GControls) {
    super({ antialias: true });

    this.scene = scene;
    this.camera = camera;

    element.appendChild(this.domElement);

    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));

    this.setPixelRatio(window.devicePixelRatio);
    this.shadowMap.enabled = true;
    this.shadowMap.type = PCFShadowMap;

    this.controls = controls;

    this.fPSMeter = new FPSMeter();
  }

  updateSize(): void {
    const { parentElement } = this.domElement;
    if (parentElement) {
      const width = parentElement.clientWidth;
      const height = parentElement.clientHeight;

      this.setSize(width, height);

      if (this.camera instanceof PerspectiveCamera) {
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
      }
    }
  }

  animate(): void {
    requestAnimationFrame(this.animate.bind(this));

    this.controls.animate();

    this.fPSMeter.calc();

    this.render(this.scene, this.camera);
  }
}
