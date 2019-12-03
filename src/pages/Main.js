import React from 'react';
import { createContainer } from 'unstated-next';

import Header from '../components/Header';
import UrlViewer from '../components/urlViewer';
import UrlForm from '../components/urlForm';


import useUser from '../container/UserContainer';
import useUrl from '../container/UrlContainer';
export const UserContainer = createContainer(useUser);
export const UrlContainer = createContainer(useUrl);

export default () => {
  return (
    <div>
      <UserContainer.Provider>
        <Header UserContainer={UserContainer}/>
      </UserContainer.Provider>
      <UrlForm />
      <UrlContainer.Provider>
        <UrlViewer UrlContainer={UrlContainer}/>
      </UrlContainer.Provider>
    </div>
  )
}
