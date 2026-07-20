import { io } from 'socket.io-client';
export const socketTs = io('/', {
  withCredentials: true,
});
