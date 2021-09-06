import firebase from 'firebase'
require("@firebase/firestore")


 const firebaseConfig = {
  apiKey: "AIzaSyBh4JMgO0Rc7QORIbq69T8a-tcAmznFSo4",
  authDomain: "pro-c73-7a572.firebaseapp.com",
  projectId: "pro-c73-7a572",
  storageBucket: "pro-c73-7a572.appspot.com",
  messagingSenderId: "809073180962",
  appId: "1:809073180962:web:6ddd8e11abfa72e31fa57b"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

