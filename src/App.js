import React from 'react';
import './assets/App.css';
import { Provider, Subscribe } from 'unstated';

import Header from './components/Header';
import UrlViewer from './components/urlViewer';
import UrlForm from './components/urlForm';

import UrlContainer from './firestore/urlContainer';
import UserContainer from "./firestore/userContainer";


export default class App extends React.Component {

  renderContents = () => {
    return (
      <Subscribe to={[UrlContainer, UserContainer]}>
        {(UrlContainer, UserContainer) => (
          <div>
            <Header UserContainer={UserContainer}/>
            <UrlForm />
            <UrlViewer UrlContainer={UrlContainer}/>
          </div>
        )}        
      </Subscribe>
    )
  }

  render() {
    return (
      <div className="App">
        <Provider>
          <this.renderContents />
        </Provider>
      </div>
    );
  }
}
