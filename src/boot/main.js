// import something here
import firebase from 'firebase'
import 'firebase/firestore'

var Config = {
  apiKey: 'YourAPI',
  authDomain: 'YourAPI',
  databaseURL: 'YourAPI',
  projectId: 'YourAPI',
  storageBucket: 'YourAPI.appspot.com',
  messagingSenderId: 'YourAPI',
  appId: '1:YourAPI:web:df0460478a00ec53'
}
// Initialize Firebase
firebase.initializeApp(Config)
// incia banco
export const db = firebase.firestore()
export const timestamp = firebase.firestore.FieldValue.serverTimestamp()
export default firebase;
firebase.firestore().enablePersistence()
.then(function() {

})
.catch(function(err) {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
})
