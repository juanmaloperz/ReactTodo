var React = require('react');
var TodoList = require('TodoList');
var moment = require('moment');


var Todo = React.createClass({
render: function(){
  var {id, text, completed,createdAt, completedAt} = this.props;
  var todoClassName = completed? 'todo todo-completed' : 'todo';
  var renderDate = () =>{
    var message = 'Created';
    var timestamp = createdAt;

    if(completed){
      var message ='Completed';
      var timestamp= completedAt;
    }
    return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
  };
  return(
    <div className={todoClassName} onClick={()=>{
        this.props.onToggle(id);
      }}>
      <div>
        <input type="checkbox" checked={completed}/>
      </div>
       <p>{text}</p>
       <p>{renderDate()}</p>
    </div>
  )
}
});

module.exports = Todo;
