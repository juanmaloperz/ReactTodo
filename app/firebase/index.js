import firebase from 'firebase';

try{  // to make sure only happen one
  var config = {
    apiKey: "AIzaSyCUe4r1BMduGl41WW1kwrOwHU-J-3wdZAU",
    authDomain: "juan-todo.firebaseapp.com",
    databaseURL: "https://juan-todo.firebaseio.com",
    storageBucket: "juan-todo.appspot.com",
  };
  firebase.initializeApp(config);
} catch(e){

}
export var firebaseRef = firebase.database().ref();
export default firebase;
