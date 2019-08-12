import React from 'react';
import '../assets/UrlViewer.css';
import {Subscribe} from 'unstated';
import UrlContainer from '../firestore/urlContainer';

import UrlList from './urlList';


export default class UrlViewer extends React.Component {
  // constructor() {
  //   super();
  // }

  render(){
    return(
      <div className="urlViewer">
        <Subscribe to={[UrlContainer]}>
          {UrlContainer =>
            <UrlList container={UrlContainer}/>
          }
        </Subscribe>
      </div>
    );
  }
}