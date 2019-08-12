import {Container} from 'unstated';
import firebase from './firestore';
import '@firebase/firestore';


const firestore = 
    firebase
    .firestore()
    .collection('test')
    .doc('v1')
    .collection('DocLists')


export default class UrlContainer extends Container {
  
  constructor (props) {
    super(props);
    this.state = {
      urls: [],
      lastVisible: "", //次にロードすべきplaylistの添字
      is_full: false,
      is_refreshing: false,
    }
  }

  next = () => {
    this.lockUrls()
    .then(() => this.getMoreUrls())
    .then(() => this.unlockUrls())
    .catch((err) => console.warn(err))
  }

  lockUrls = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          if(this.state.is_full) {
            reject('url is full')
          }
          if(!this.state.is_refreshing) {
            this.setState({ is_refreshing : true },resolve('success'))
          } else {
            reject('fail locked')
          }
        }
      , 1000)
    })
  }

  unlockUrls = () => {
    this.setState({ is_refreshing : false });
  }


  getMoreUrls = () => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
        firestore
        .orderBy('url')
        .startAfter(this.state.lastVisible)
        .limit(5)
        .get()
        .then((docs) => this.setUrls(docs))
        .then(() => resolve('save'))
        .catch(err => console.log(err))
      }, 0)
    })
  }

  setUrls = (docs) => {
    return new Promise((resolve, reject) => {

      if(docs.empty) {
        this.setFull()
        .then(reject('is empty'))
      }
      setTimeout(() => {
        docs.docs.forEach(doc => {
          this.setState(() => {
            const urls = [...this.state.urls, {id : doc.id, data : doc.data()}];
            return { 
              urls,
            };
          });
        });
        this.forwardLastVisible(docs)
        .then(() => resolve('set Url'))
      }, 30)
    })  
  }

  forwardLastVisible = (docs) => {
    return new Promise(resolve => {
      setTimeout(
        () => {
          this.setState(() => {
            const lastVisible = docs.docs[docs.docs.length - 1];
            return {
              lastVisible,
            }
          });
          resolve('set LastVisibleSet')
        }
      ,1000)
    })
  }

  setFull = () => {
    return new Promise((resolve) => {
      this.setState(() => {
        return { is_full : true }
      }).then(resolve('full'))
    });
  }
}
