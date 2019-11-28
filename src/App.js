import React from 'react';
import './assets/App.css';
import { Provider } from 'unstated';

import MainPage from './pages/Main.js';

export default () => {
  return (
    <div className="App">
      <Provider>
          <MainPage />
      </Provider>
    </div>
  );
}
