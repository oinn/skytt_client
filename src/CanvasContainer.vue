<template>
  <div id="canvas-container" @click="lockControls"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PerspectiveCamera } from 'three';
import TestArea from '@/canvas/scenes/TestArea';
import GRenderer from '@/classes/GRenderer';
import GControls from '@/classes/GControls';

export default defineComponent({
  name: 'CanvasContainer',
  data() {
    return {
      controls: undefined as GControls | undefined
    };
  },
  mounted() {
    const scene = TestArea;
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.y = 1.7;
    camera.position.z = 5;

    this.controls = new GControls(camera, this.$el);

    const renderer = new GRenderer(this.$el, scene, camera);
    this.$store.commit('setRenderer', renderer);

    renderer.addAnimation(this.controls.animation);

    renderer.render();
  },
  methods: {
    lockControls(): void {
      // eslint-disable-next-line no-unused-expressions
      this.controls?.lock();
    }
  }
});
</script>

<style lang="scss">
#canvas-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
