<template>
  <div id="canvas-container"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PerspectiveCamera, WebGLRenderer } from 'three';
import TestArea from '@/canvas/scenes/TestArea';

export default defineComponent({
  name: 'CanvasContainer',
  mounted() {
    const scene = TestArea;
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.$el.appendChild(renderer.domElement);

    camera.position.y = 1.7;
    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    animate();
  }
});
</script>
