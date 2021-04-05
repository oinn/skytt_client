<template>
  <div id="gui-container">
    <StatusPanel/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StatusPanel from '@/gui/StatusPanel.vue';

export default defineComponent({
  name: 'GuiContainer',
  components: { StatusPanel }
});
</script>

<style lang="scss">
#gui-container {
  pointer-events: none;
}
</style>
