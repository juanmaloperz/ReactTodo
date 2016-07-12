var React = require('react');

var AddTodo = React.createClass({
  handleSubmit: function (e) {
  e.preventDefault();
  var todoText = this.refs.todoText.value;

  if (todoText.length > 0){
    this.refs.todoText.value= '';
    this.props.onaddTodo(todoText);
  } else{
    this.refs.todoText.focus();
  }
},
render: function(){
  return(
    <div>
<form onSubmit={this.handleSubmit}>
  <div>
<input type="text" ref="todoText" placeholder= "Add To do"/>
  </div>
  <div>
    <button className="button expanded"> Add to Do </button>
  </div>
</form>
</div>
      );
      }
      });
module.exports = AddTodo;
