import React from 'react';
import {Grid, Form, Button, FormField, Box} from 'grommet';

import firebase from '../firestore/firestore'

const db = firebase.firestore();


export default class UrlForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUrl = this.addUrl.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addUrl();
  }

  addUrl() {
    db
    .collection('test')
    .doc('v1')
    .collection('DocLists')
    .add({
        url: this.state.value
    })
    .then((doc) => {
      console.log(`追加に成功しました (${doc.id})`);
    })
    .catch((error) => {
      console.log(`追加に失敗しました (${error})`);
    });
  }
  
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Grid
          columns={['3/4', '1/4']}
          rows={['xsmall', 'medium',"xsmall"]}
          gap='small'
          justify='center'
          areas={[
              { name: 'nav', start: [0, 2], end: [0, 2] },
              { name: 'main', start: [1, 2], end: [1, 2] },
          ]}
        >
          <Box gridArea='nav'>
            <FormField 
              name="url" 
              label="url"
              type="url"
              gridArea='nav'
              value={this.state.value} 
              onChange={this.handleChange}
            />
          </Box>
          <Box gridArea='main'>
              <Button type="submit" gridArea='main' primary label="Submit" />
          </Box>
        </Grid>
      </Form>
    );
  }
}