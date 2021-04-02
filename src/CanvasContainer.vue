<template>
  <div id="canvas-container"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PerspectiveCamera } from 'three';
import TestArea from '@/canvas/scenes/TestArea';
import GRenderer from '@/classes/GRenderer';

export default defineComponent({
  name: 'CanvasContainer',
  mounted() {
    const scene = TestArea;
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.y = 1.7;
    camera.position.z = 5;

    const renderer = new GRenderer(this.$el, scene, camera);

    renderer.animate();
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
