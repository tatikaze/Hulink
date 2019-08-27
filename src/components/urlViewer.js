import React from 'react';
import '../assets/UrlViewer.css';

import UrlList from './urlList';


export default class UrlViewer extends React.Component {
  // constructor() {
  //   super();
  // }

  render(){
    return(
      <div className="urlViewer">
        <UrlList container={this.props.UrlContainer}/>
      </div>
    );
  }
}