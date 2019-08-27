import React from 'react';
import '../assets/UrlForm.css';
import { Box, Button, TextField } from '@material-ui/core'

import firebase from '../firestore/firestore'

const db = firebase.firestore();


export default class UrlForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url : '',
      title : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUrl = this.addUrl.bind(this);
  }
  
  handleChange = name => event => {
    this.setState(
      { [name] : event.target.value }
    )
  }

  handleSubmit = event => {
    this.addUrl();
  }

  addUrl = test => {
    db
    .collection('test')
    .doc('v1')
    .collection('DocLists')
    .add({
        url: this.state.url,
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
      return { url : text }
    }, this.forceUpdate))
  } 
  
  render() {
    //普段は投稿フォームを閉じておき、
    //ツイッターのような投稿ボタンを押すとクリップボードにあるurlを自動的にフォームに入れたものが出現する
    return (
      <div className="UrlForm">
        <form>
            <TextField 
              required
              id="url-form"
              label="url" 
              value={this.state.url} 
              onChange={this.handleChange('url')}
              margin="normal"
            />
            <br/>
            <TextField 
              id="url-form"
              label="title" 
              value={this.state.title} 
              onChange={this.handleChange('title')}
              margin="normal"
            />
            <br/>
            <Box>
              <Button onClick={() => {this.paste()}} color="primary">paste</Button>
              <Button onClick={() => this.handleSubmit()}>submit</Button>
            </Box>
        </form>
      </div>
    );
  }
}