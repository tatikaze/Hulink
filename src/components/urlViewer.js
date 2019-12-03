import React from 'react';
import '../assets/UrlViewer.css';

import UrlList from './urlList';

import { UrlContainer } from '../pages/Main';

export default () => {

  const container = UrlContainer.useContainer();

  return(
    <div className="urlViewer">
      <UrlList container={container}/>
    </div>
  );
}
