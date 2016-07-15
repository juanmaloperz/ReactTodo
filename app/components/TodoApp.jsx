var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted:false,
      searchText: '',
       todos : [
  {
    id: uuid(),
    text: 'Take a Shower',
    completed: false
  },
  { id: uuid(),
    text: 'Brush your teeth',
    completed: true
  },
  {
    id: uuid(), text:'walk the dog', completed:true
  },
  {id: uuid() , text: 'Go to Work', completed:false}
  ]
};
},
handleAddTodo: function(text){
  this.setState({
    todos:[
     ...this.state.todos,
    {
     id: uuid(),
     text: text,
     completed: false
   }
 ]
  })
},
handleToggle: function(id){
    var updatedTodos = this.state.todos.map((todo) => {
       if( todo.id === id){
         todo.completed = !todo.completed;
       }
      return todo;
    });
    this.setState({todos: updatedTodos});
},
handlesearch: function(showCompleted,searchText){
  this.setState({
    showCompleted: showCompleted ,
    searchText: searchText.toLowecase()
  });
},
render: function (){
  var {todos} = this.state;
return(
<div>
<TodoSearch  onSearch={this.handlesearch}/>
<TodoList todos={todos} onToggle={this.handleToggle}/>
<AddTodo onaddTodo={this.handleAddTodo}/>
</div>
)
}
});

module.exports = TodoApp;
