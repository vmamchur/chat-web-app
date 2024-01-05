import { FC, ReactNode, useEffect } from 'react';

import socket from '../constants/socket';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSocket } from '../redux/slices/socketSlice';
import { setLastSeen, setUserStatus } from '../redux/slices/usersSlice';

interface Props {
  children: ReactNode;
};

const SocketContainer: FC<Props> = ({ children }) => {
  const { socketInstance } = useAppSelector((state) => state.socket);
  const { currentUser } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    dispatch(setSocket(socket));
    socket.emit('join', currentUser?.id);
    
    const handleUserStatusChange = (userId: string, isOnline: boolean) => {
      dispatch(setUserStatus({ userId, isOnline }));
      dispatch(setLastSeen({ userId, lastSeen: new Date() }));
    };

    socket.on('userOnline', (userId: string) => {
      handleUserStatusChange(userId, true);
    });
    
    socket.on('userOffline', (userId: string) => {
      handleUserStatusChange(userId, false);
    });

    return () => {
      if (socketInstance) {
        socket.emit('leave', currentUser?.id);
        socketInstance.disconnect();
      }
    };
  }, [socketInstance, dispatch, currentUser]);

  return children;
};

export default SocketContainer;
