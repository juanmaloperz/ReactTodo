var React = require('react');
var TodoList = require('TodoList')

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
render: function (){
  var {todos} = this.state;
return(
<div>
<TodoList todos={todos}/>
</div>
)
}
});

module.exports = TodoApp;
