<template>
  <div>{{ fPSString }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GRenderer from '@/classes/GRenderer';
import { Clock } from 'three';

let fps = 0;
let prevTime = 0;

export default defineComponent({
  name: 'FPSWidget',
  data() {
    return {
      clock: new Clock(),
      fPSString: '',
      animationItemId: undefined as number | undefined
    };
  },
  computed: {
    renderer(): GRenderer | undefined {
      return this.$store.state.renderer;
    }
  },
  watch: {
    renderer: {
      immediate: true,
      handler(renderer: GRenderer | undefined): void {
        if (renderer)
          this.animationItemId = renderer.addAnimation(this.calculation);
      }
    }
  },
  beforeUnmount(): void {
    if (this.renderer && this.animationItemId)
      this.renderer.removeAnimation(this.animationItemId);
  },
  methods: {
    calculation(): void {
      this.clock.getDelta();
      fps += 1;

      if (prevTime > (this.clock.elapsedTime - Math.trunc(this.clock.elapsedTime))) {
        this.fPSString = `${fps} fps`;
        fps = 0;
      }

      prevTime = this.clock.elapsedTime - Math.trunc(this.clock.elapsedTime);
    }
  }
});
</script>
