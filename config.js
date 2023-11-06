 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyAsRK4pNNn1eCC9y1UA0BKM-fJUEA1WTww",
  authDomain: "school-4634b.firebaseapp.com",
  databaseURL: "https://school-4634b-default-rtdb.firebaseio.com",
  projectId: "school-4634b",
  storageBucket: "school-4634b.appspot.com",
  messagingSenderId: "987853394146",
  appId: "1:987853394146:web:cccd8f711a2a4012700ebb"
};
  export default firebase.database(firebaseConfig)
 

  