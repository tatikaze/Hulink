import React from 'react';
import {Layer, Form, Button, FormField, Box, TextInput} from 'grommet';
import '../assets/UrlForm.css';

import firebase from '../firestore/firestore'

const db = firebase.firestore();


export default class UrlForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      urlData : '',
      title : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUrl = this.addUrl.bind(this);
  }
  
  handleChange = (event) => {
    this.setState(
      { [event.target.name] : event.target.value }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.addUrl();
  }

  addUrl = () => {
    db
    .collection('test')
    .doc('v1')
    .collection('DocLists')
    .add({
        url: this.state.urlData,
        title: this.state.title,
    })
    .then((doc) => {
      console.log(`追加に成功しました (${doc.id})`);
    })
    .catch((error) => {
      console.log(`追加に失敗しました (${error})`);
    });
  }

  paste = () => {
    navigator.clipboard.readText()
    .then(text => this.setState(() => {
      return { urlData : text }
    }, this.forceUpdate))
  } 
  
  render() {
    //普段は投稿フォームを閉じておき、
    //ツイッターのような投稿ボタンを押すとクリップボードにあるurlを自動的にフォームに入れたものが出現する
    return (
      <div className="UrlForm">
        <Form onSubmit={this.handleSubmit}>
          <Box>
            <FormField
              name="url"
              label="url"
              type="text"
              gridArea='nav'
              onChange={this.handleChange}
            >
              <TextInput value={this.state.urlData} name='urlData' onChange={this.handleChange}/>
            </FormField>
            <FormField
              name="title"
              label="title"
              type="text"
            >
              <TextInput value={this.state.title} name='title' onChange={this.handleChange}/>
            </FormField>
          </Box>
          <Box>
            <Button onClick={() => {this.paste()}} color="accent-4" label = "paste" />
            <Button type="submit" gridArea='main' label="Submit" />
          </Box>
        </Form>
      </div>
    );
  }
}