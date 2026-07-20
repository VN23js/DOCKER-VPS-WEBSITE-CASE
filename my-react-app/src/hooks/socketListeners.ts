import type { AppDispatch } from '../redux/store';
import { socketTs } from '../api/socketTs';
import { UsersOnline } from '../redux/ProfileSlice';
export const initSocketListeners = (dispatch: AppDispatch) => {
  socketTs.off('users_online');
  socketTs.on('users_online', (usersOnline: number) => {
    console.log(usersOnline, 'Online Users');
    dispatch(UsersOnline(usersOnline));
  });
  socketTs.emit('get_users_online');
};
