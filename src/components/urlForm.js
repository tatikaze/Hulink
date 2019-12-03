import React, { useState } from 'react';
import '../assets/UrlForm.css';
import { Box, Button, TextField } from '@material-ui/core'

import firebase from '../firestore/firestore'


export default () => {

  const db = firebase.firestore();

  const [link, setLink] = useState({
    url : "",
    title : "",
  });
  
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setLink({ ...link, [name] : value })
  }

  const handleSubmit = () => {
    addUrl();
  }

  const addUrl = () => {
    db
    .collection('test')
    .doc('v1')
    .collection('DocLists')
    .add({
      url: link.url,
      title: link.title,
    })
    .then((doc) => {
      console.log(`追加に成功しました (${doc.id})`);
    })
    .catch((error) => {
      console.log(`追加に失敗しました (${error})`);
    });
  }

  const paste = () => {
    navigator.clipboard.readText()
    .then(text => setLink(() => {
      return { ...link, url : text }
    }))
  } 
  
    //普段は投稿フォームを閉じておき、
    //ツイッターのような投稿ボタンを押すとクリップボードにあるurlを自動的にフォームに入れたものが出現する
  return (
    <div className="UrlForm">
      <form>
          <TextField 
            required
            id="url-form"
            label="url"
            name="url"
            value={link.url} 
            onChange={handleChange}
            margin="normal"
          />
          <br/>
          <TextField 
            id="url-form"
            label="title"
            name="title"
            value={link.title} 
            onChange={handleChange}
            margin="normal"
          />
          <br/>
          <Box>
            <Button onClick={() => {paste()}} color="primary">paste</Button>
            <Button onClick={() => handleSubmit()}>submit</Button>
          </Box>
      </form>
    </div>
  );
}
