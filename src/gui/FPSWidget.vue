<template>
  <div>{{ fPSString }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FPSWidget',
  computed: {
    fPSString(): string {
      return `FPS: ${this.$store.state.fPSCounter}`;
    }
  }
});
</script>
