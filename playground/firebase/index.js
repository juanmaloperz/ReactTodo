import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCUe4r1BMduGl41WW1kwrOwHU-J-3wdZAU",
  authDomain: "juan-todo.firebaseapp.com",
  databaseURL: "https://juan-todo.firebaseio.com",
  storageBucket: "juan-todo.appspot.com",
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Andrew',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('child_added', snapshot.key , snapshot.val());
});

todosRef.push().set({
  addtodo: 'Play station 3'
});
