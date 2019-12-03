import { useState, useEffect } from 'react';
import firebase from '../firestore/firestore';
import '@firebase/firestore';


export default () => {

  const [user, setUser] = useState(null);

  useEffect(() =>{
    changed(); 
  },[user])

  const changed = () => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  const logout = () => {
    firebase.auth().signOut();
  }

  return { user, changed, login, logout }
}
