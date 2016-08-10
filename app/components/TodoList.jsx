var React = require('react');
var {connect} = require('react-redux');
import Todo from 'Todo';


export var TodoList = React.createClass({
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
export default connect(
  (state)=> {
  return{
    todos: state.todos
  };
}
)(TodoList);
