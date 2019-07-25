import React from 'react';
import {Grommet} from 'grommet';
import './assets/App.css';

import UrlViewer from './components/urlViewer'
import UrlForm from './components/urlForm';

function App() {
  return (
    <div className="App">
      <Grommet>
        <UrlViewer />
        <UrlForm/>
      </Grommet>
    </div>
  );
}

export default App;
