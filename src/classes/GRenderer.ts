import {
  Camera,
  PCFShadowMap,
  Scene,
  WebGLRenderer
} from 'three';

interface IAnimationItem {
  readonly id: number;
  animation: () => void;
}

export default class GRenderer {
  private renderer: WebGLRenderer;

  private readonly scene: Scene;

  private readonly camera: Camera;

  private animationItemsIdCounter = 0;

  private animationItems: Array<IAnimationItem> = [];

  constructor(element: HTMLElement, scene: Scene, camera: Camera) {
    this.scene = scene;
    this.camera = camera;

    this.renderer = new WebGLRenderer({ antialias: true });

    element.appendChild(this.renderer.domElement);

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = PCFShadowMap;

    this.updateSize();
    window.addEventListener('resize', this.updateSize.bind(this));
  }

  private updateSize(): void {
    const { parentElement } = this.renderer.domElement;

    if (parentElement)
      this.renderer.setSize(parentElement.clientWidth, parentElement.clientHeight);
  }

  public addAnimation(animation: () => void): number {
    this.animationItemsIdCounter += 1;
    this.animationItems.push({
      id: this.animationItemsIdCounter,
      animation
    });
    return this.animationItemsIdCounter;
  }

  public removeAnimation(animationItemId: number): void {
    const animationItemIndex = this.animationItems
      .findIndex((animationItem) => animationItem.id === animationItemId);

    if (animationItemIndex >= 0)
      this.animationItems.splice(animationItemIndex, 1);
  }

  public render(): void {
    requestAnimationFrame(this.render.bind(this));

    this.animationItems.forEach((animationItem) => animationItem.animation());

    this.renderer.render(this.scene, this.camera);
  }
}
