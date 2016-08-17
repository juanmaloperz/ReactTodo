import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCUe4r1BMduGl41WW1kwrOwHU-J-3wdZAU",
  authDomain: "juan-todo.firebaseapp.com",
  databaseURL: "https://juan-todo.firebaseio.com",
  storageBucket: "juan-todo.appspot.com",
};
firebase.initializeApp(config);

 var firebaseRef = firebase.database().ref

firebaseRef.set({
  app:{
    name: 'Todo App',
    version: 1
  }
  isRunning: true,
  user:{
    name: 'Juan',
    age: 34
  }
}).then(()=>{
  console.log('Set Worked!');
}, (e)=>{
  console.log('Set failed');
})

firebaseRef.child('user').set({
  name: 'Pedro'
})
 firebaseRef.child('app').set({
   version: 2
 })
