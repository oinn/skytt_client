import { io } from 'socket.io-client';

const { hostname, protocol } = window.location;

const socket = io(`${protocol}//${hostname}:4040`, { transports: ['websocket'] });

export default socket;
