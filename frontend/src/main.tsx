import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './redux/store.ts';
import SocketContainer from './containers/SocketContainer.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <SocketContainer>
      <App />
    </SocketContainer>
  </Provider>,
);
