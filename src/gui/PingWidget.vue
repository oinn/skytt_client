<template>
  <div style="margin-left: 8px;">{{ pingCounterString }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const PING_DELAY = 2 * 1000;

// noinspection JSUnusedGlobalSymbols
export default defineComponent({
  name: 'PingWidget',
  data() {
    return {
      timeoutId: undefined as number | undefined,
      time: new Date().getTime() as number,
      pingCounter: undefined as number | undefined
    };
  },
  sockets: {
    connect(): void {
      this.startPing();
    },
    disconnect(): void {
      clearTimeout(this.timeoutId);
      this.pingCounter = undefined;
    },
    pong(time: number): void {
      this.pingCounter = Math.ceil((new Date().getTime() - time) / 2);
    }
  },
  computed: {
    pingCounterString(): string {
      if (!this.$socket.connected || this.pingCounter === undefined)
        return 'offline';
      return `${this.pingCounter} ms`;
    }
  },
  methods: {
    startPing(): void {
      this.$socket.client.emit('ping', new Date().getTime());
      this.timeoutId = setTimeout(this.startPing.bind(this), PING_DELAY);
    }
  }
});
</script>
