import { FC, ReactNode, useEffect } from 'react';

import socket from '../constants/socket';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setSocket } from '../redux/slices/socketSlice';

interface Props {
  children: ReactNode;
};

const SocketContainer: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { socketInstance } = useAppSelector((state) => state.socket);
  const { currentUser } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    dispatch(setSocket(socket));
    socket.emit('join', currentUser?.id);

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
        dispatch(setSocket(null));
      }
    };
  }, [socketInstance, dispatch, currentUser]);

  return children;
};

export default SocketContainer;
