<template>
  <CanvasContainer/>
  <GuiContainer/>
  <ScreensContainer/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CanvasContainer from '@/CanvasContainer.vue';
import GuiContainer from '@/GuiContainer.vue';
import ScreensContainer from '@/ScreensContainer.vue';

export default defineComponent({
  name: 'App',
  components: { ScreensContainer, GuiContainer, CanvasContainer }
});
</script>
