var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function(){
    return{
      showCompleted:false,
      searchText: '',
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
<TodoList todos={todos}/>
<AddTodo onaddTodo={this.handleAddTodo}/>
</div>
)
}
});

module.exports = TodoApp;
