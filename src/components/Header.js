import React from 'react';
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core';

import { UserContainer } from '../pages/Main';


export default () => {

  const container = UserContainer.useContainer();

  //  componentDidMount = () => {
  //    this.props.UserContainer.changed();
  //  }

  const RenderUser = () => {
    if(container.user != null) {
      return (
        <Button onClick={container.logout}>
          <p style={{float : 'left'}}>Logout</p>
          <img
            src={container.user.photoURL}
            style={{float : "left", height: "40px"}}
          />
        </Button>
      )
    } else {
      return (
        <Button onClick={container.login}>Google Login</Button>
      )
    }
  }

  return (
    <Box bgcolor="#cddc39" >
      <h1 style={{color: '＃424242', float: "left", margin : '10px', marginLeft : '20px'}}>Hulink</h1>
      <Box textAlign="right">
        <RenderUser />
      </Box>
    </Box>
  )
}
