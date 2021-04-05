<template>
  <div id="status-panel">
    <div class="spacer"/>
    <FPSWidget/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FPSWidget from '@/gui/FPSWidget.vue';

export default defineComponent({
  name: 'StatusPanel',
  components: { FPSWidget }
});
</script>

<style lang="scss">
@import "../styles/colors.scss";

#status-panel {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 32px;
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  pointer-events: none;

  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: $black;
    opacity: 0.16;
    content: "";
    pointer-events: none;
  }
}

div.spacer {
  flex-grow: 1;
}
</style>
