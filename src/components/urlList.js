import React from 'react';
// import { Text } from 'grommet';
// import { axios } from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import UrlItem from './urlItem';


export default class UrlList extends React.Component {

  render() {
    const store = this.props.container;
    return (
        <InfiniteScroll
          dataLength={store.state.urls.length}
          next={store.next()}
          hasMore={store.state.is_full}
          loader={<h4>...Loading Now</h4>}
        >
          {store.state.urls.map((i, index) => (
            <UrlItem key={i.id}  item={i} />
          ))}
        </InfiniteScroll>
      
    );
  }

}
