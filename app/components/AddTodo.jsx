var React = require('react');
var {connect}= require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
  e.preventDefault();
  var {dispatch} = this.props;
  var todoText = this.refs.todoText.value;

  if (todoText.length > 0){
    this.refs.todoText.value= '';
    dispatch(actions.addTodo(todoText));
    //this.props.onaddTodo(todoText);
  } else{
    this.refs.todoText.focus();   // focus take the mouse back//
  }
},
render: function(){
  return(
<div className="container_footer">
<form onSubmit={this.handleSubmit}>
<input type="text" ref="todoText" placeholder= "What do you need todo"/>
    <button className="button expanded"> Add to Do </button>
</form>
</div>
      );
    }
  });
export default  connect()(AddTodo);
