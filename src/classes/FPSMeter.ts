import { Clock } from 'three';
import store from '@/store';

export default class FPSMeter {
  private clock: Clock;

  fps = 0;

  prevTime = 0;

  constructor() {
    this.clock = new Clock();
  }

  calc(): void {
    this.clock.getDelta();
    this.fps += 1;

    if (this.prevTime > (this.clock.elapsedTime - Math.trunc(this.clock.elapsedTime))) {
      store.commit('setFPSCounter', this.fps);
      this.fps = 0;
    }

    this.prevTime = this.clock.elapsedTime - Math.trunc(this.clock.elapsedTime);
  }
}
