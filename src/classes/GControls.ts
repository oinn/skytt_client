import { Camera } from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';

export default class GControls {
  private controls: PointerLockControls;

  private keys: { [index: string]: boolean } = {
    KeyW: false,
    KeyS: false,
    KeyA: false,
    KeyD: false
  }

  constructor(camera: Camera, element: HTMLElement) {
    this.controls = new PointerLockControls(camera, element);

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (Object.keys(this.keys).includes(event.code))
        this.keys[event.code] = true;
    });

    window.addEventListener('keyup', (event: KeyboardEvent) => {
      if (Object.keys(this.keys).includes(event.code))
        this.keys[event.code] = false;
    });
  }

  lock(): void {
    this.controls.lock();
  }

  animate(): void {
    if (this.keys.KeyW)
      this.controls.moveForward(0.2);
    if (this.keys.KeyS)
      this.controls.moveForward(-0.2);
    if (this.keys.KeyA)
      this.controls.moveRight(-0.2);
    if (this.keys.KeyD)
      this.controls.moveRight(0.2);
  }
}
