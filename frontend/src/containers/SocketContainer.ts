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

  useEffect(() => {
    if (!socketInstance) {
      dispatch(setSocket(socket));
    }

    return () => {
      if (socketInstance) {
        socketInstance.disconnect();
        dispatch(setSocket(null));
      }
    };
  }, [socketInstance, dispatch]);

  console.log(socketInstance);

  return children;
};

export default SocketContainer;
