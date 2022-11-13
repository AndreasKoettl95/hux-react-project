import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import TemporaryContainer from './LoginPage/TemporaryContainer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
      <TemporaryContainer />
  </React.StrictMode>
);
