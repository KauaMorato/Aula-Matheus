import React from 'react';
import ReactDOM from 'react-dom/client'; // ← /client é importante!
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// React 18: cria a raiz do app primeiro
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// Depois renderiza com o Provider em volta!
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);