var $ = require('jquery');

module.exports = {
  setTodos: function(todos){
  if($.isArray(todos)){
    localStorage.setItem('todos',JSON.stringify(todos));
    return todos;
  }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    } catch(e){

    }
    return $.isArray(todos) ? todos : [];
  },
  filterTodos:function(todos, showCompleted, searchText){
    var filterTodos = todos;
    filterTodos = filterTodos.filter((todo)=>{
      return !todo.completed || showCompleted;
    });
    filterTodos = filterTodos.sort((a,b)=>{
      if( !a.completed && b.completed){
        return -1;
      } else if ( a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    filterTodos = filterTodos.filter((todo)=> {
      var text = todo.text.toLowerCase();
      // true stay in array, false is going to be remove;
      return searchText.length === 0 || text.indexOf(searchText) > -1 ;
});
    return filterTodos;
  }
};
