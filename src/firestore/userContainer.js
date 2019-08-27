import { Container } from 'unstated';
//TODO firestore rename firebase
import firebase from './firestore';


export default class UserContainer extends Container {

  state = {
    user : null,
  }

  changed() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user })
    })
  }

  login = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }

  logout = () => {
    firebase.auth().signOut()
    console.log('logout')
  }
}