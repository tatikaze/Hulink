import React from 'react';
import { Subscribe } from 'unstated';
import { createContainer } from 'unstated-next';

import Header from '../components/Header';
import UrlViewer from '../components/urlViewer';
import UrlForm from '../components/urlForm';

import UrlContainer from '../firestore/urlContainer';

import useUser from '../container/UserContainer';
export const UserContainer = createContainer(useUser);

export default () => {
  return (
    <Subscribe to={[UrlContainer]}>
      {(UrlContainer) => (
        <div>
          <UserContainer.Provider>
            <Header UserContainer={UserContainer}/>
          </UserContainer.Provider>
          <UrlForm />
          <UrlViewer UrlContainer={UrlContainer}/>
        </div>
      )}        
    </Subscribe>
  )
}
