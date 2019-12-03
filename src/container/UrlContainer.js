import { useState } from 'react';
import firebase from '../firestore/firestore';
import '@firebase/firestore';

export default () => {
  
  const firestore =
    firebase
    .firestore()
    .collection('test')
    .doc('v1')
    .collection('DocLists')
  
  const [urls, setUrls] = useState([]);
  const [lastVisible, setLastVisible] = useState("");
  const [isFull, setIsFull] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const next = () => {
    lockUrls()
    .then(() => getMoreUrls())
    .then(() => unlockUrls())
    .catch((err) => console.warn(err))
  }

  const lockUrls = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if(isFull) {
            reject('url is full')
          }
          if(!isRefreshing) {
            setIsRefreshing(true);
            resolve();
          } else {
            reject('fail locked')
          }
        }
      , 1000)
    })
  }

  const unlockUrls = () => {
    setIsRefreshing(false);
  }


  const getMoreUrls = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
        firestore
        .orderBy('url')
        .startAfter(lastVisible)
        .limit(20)
        .get()
        .then((docs) => setDatas(docs))
        .then(() => resolve('save'))
        .catch(err => console.log(err))
      }, 0)
    })
  }

  const setDatas = (docs) => {
    return new Promise((resolve, reject) => {

      if(docs.empty) {
        setIsFull(true)
        .then(reject('is empty'))
      }
      setTimeout(async() => {
        let fuck = [...urls];
        await docs.docs.forEach((doc) => {
          fuck = [ ...fuck, {id : doc.id, data : doc.data()}];
        });
        setUrls(fuck);
        forwardLastVisible(docs)
        .then(() => resolve('set Url'))
      }, 0)
    })  
  }

  const forwardLastVisible = (docs) => {
    return new Promise(resolve => {
      setTimeout(
        () => {
          const lastVisible = docs.docs[docs.docs.length - 1];
          setLastVisible(lastVisible);
          resolve('set LastVisibleSet');
        }
      ,1000)
    })
  }

  return { urls, lastVisible, isFull, isRefreshing, next }
} 
