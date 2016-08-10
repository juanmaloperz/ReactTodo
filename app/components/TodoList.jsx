var React = require('react');
var {connect} = require('react-redux');
var Todo = require('Todo');

var TodoList = React.createClass({
render: function(){
  var {todos} = this.props;  //We expect the to dos array to be in the props object
  var renderTodos = () => {
    if(todos.length === 0){
      return (<p className=" container_message"> Nothing to Do</p>);
    }
    return todos.map((todo)=>{
      return(
        <Todo key={todo.id} {...todo}/>
      );
    });
  };
  return(
    <div>
      {renderTodos()}
    </div>
  )
 }
});
module.exports = connect(
  (state)=> {
  return{
    todos: state.todos
  };
}
)(TodoList);
