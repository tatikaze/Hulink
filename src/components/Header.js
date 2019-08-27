import React from 'react';
import Button from '@material-ui/core/Button'
import { Box } from '@material-ui/core';

export default class Header extends React.Component {

  componentDidMount = () => {
    this.props.UserContainer.changed();
  }

  renderUser = () => {
    const UserContainer = this.props.UserContainer;
    if(UserContainer.state.user != null) {
      return (
        <Button onClick={UserContainer.logout}>
          <p style={{float : 'left'}}>Logout</p>
          <img
            src={UserContainer.state.user.photoURL}
            style={{float : "left", height: "40px"}}
          />
        </Button>
      )
    } else {
      return (
        <Button onClick={UserContainer.login}>Google Login</Button>
      )
    }
  }

  render () {
    return (
      <Box bgcolor="#cddc39" >
        <h1 style={{color: '＃424242', float: "left", margin : '10px', marginLeft : '20px'}}>Hulink</h1>
        <Box textAlign="right">
          <this.renderUser />
        </Box>
      </Box>
    )
  }
}