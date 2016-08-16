import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCUe4r1BMduGl41WW1kwrOwHU-J-3wdZAU",
  authDomain: "juan-todo.firebaseapp.com",
  databaseURL: "https://juan-todo.firebaseio.com",
  storageBucket: "juan-todo.appspot.com",
};
firebase.initializeApp(config);

firebase.datebase().ref.set({
  appName: 'Todo App'
});
