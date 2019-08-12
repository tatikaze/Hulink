import React from 'react';
import { Box, Button } from 'grommet';

export default class UrlItem extends React.Component {

  renderTitle = (data) => {
    if(data.title === undefined) {
      return data.url;
    }else {
      return data.title;
    }
  }

  render () {
    const item = this.props.item
    return (
      <Box pad='xlarge' border={{ color : "#00739D" }} margin="xsmall" height="xsmall">
        <a href={item.data.url} target="_blank">
          {this.renderTitle(item.data)}
        </a>
      </Box>
    )
  }
}