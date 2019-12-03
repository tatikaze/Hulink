import React from 'react';
// import { Text } from 'grommet';
// import { axios } from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import UrlItem from './urlItem';


export default (props) => {

  const store = props.container;

  return (
      <InfiniteScroll
        dataLength={store.urls}
        next={store.next()}
        hasMore={store.isFull}
        loader={<h4>...Loading Now</h4>}
      >
        {store.urls.map((i, index) => (
          <UrlItem key={i.id}  item={i} />
        ))}
      </InfiniteScroll>
    
  );
}
