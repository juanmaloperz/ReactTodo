var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
       todos : [
  {
    id:1,
    text: 'Take a Shower'
  },
  { id:2,
    text: 'Brush your teeth'
  },
  {
    id:3, text:'walk the dog'
  },
  {id: 4, text: 'Go to Work'}
  ]
};
},
handleAddTodo: function(text){
  alert('new todo:'+text)

},
render: function (){
  var {todos} = this.state;
return(
<div>
<TodoList todos={todos}/>
<AddTodo onaddTodo={this.handleAddTodo}/>
</div>
)
}
});

module.exports = TodoApp;
