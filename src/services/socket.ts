import { io } from 'socket.io-client';

const socket = io('http://localhost:4040', { transports: ['websocket'] });

export default socket;
