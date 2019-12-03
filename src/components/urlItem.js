import React from 'react';
import { Box } from '@material-ui/core';

export default (props) => {

  const RenderTitle = (data) => {
    if(data.title === undefined) {
      return data.url;
    }else {
      return data.title;
    }
  }

    const item = props.item
    return (
      <Box
        pad='xlarge'
        border={{ color : "#00739D" }} 
        margin="xsmall" 
        height="xsmall"
      >
        <a 
          href={item.data.url} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          {RenderTitle(item.data)}
        </a>
      </Box>
    )
}
