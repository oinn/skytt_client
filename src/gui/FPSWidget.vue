<template>
  <div>{{ fPSString }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FPSWidget',
  computed: {
    fPSString(): string {
      return `${this.$store.state.fPSCounter} fps`;
    }
  }
});
</script>
