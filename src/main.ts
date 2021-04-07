import { createApp } from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import socket from '@/services/socket';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import './styles/style.scss';

createApp(App)
  .use(store)
  .use(VueSocketIOExt, socket)
  .mount('#app');
