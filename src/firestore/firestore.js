import firebase from 'firebase/app';
import '@firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBWJYuWQ9Zjo5RqNZZIsoO2LhwpE2mZS18",
  authDomain: "hulink-e48f8.firebaseapp.com",
  databaseURL: "https://hulink-e48f8.firebaseio.com",
  projectId: "hulink-e48f8",
  storageBucket: "hulink-e48f8.appspot.com",
  messagingSenderId: "161943216613",
  appId: "1:161943216613:web:363e6320c495c468"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;