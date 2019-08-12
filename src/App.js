import React from 'react';
import {Grommet} from 'grommet';
import './assets/App.css';
import {Provider} from 'unstated';

import Header from './components/Header';
import UrlViewer from './components/urlViewer';
import UrlForm from './components/urlForm';

function App() {
  return (
    <div className="App">
      <Provider>
        <Grommet>
          <Header />
          <UrlForm />
          <UrlViewer/>
        </Grommet>
      </Provider>
    </div>
  );
}

export default App;
