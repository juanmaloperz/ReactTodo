export var setSearchText = (searchText)=> {
  return{
    type:'SET_SEARCH_TEXT',
    searchText
  };
};

export var addTodo = (text) =>{
  return {
    type: 'ADD_TODO',
    text
  };
};

export var toggleShowCompleted =()=>{
return{
type: 'TOGGLE_SHOW_COMPLETED'
 };
};

export var toggleTodo = () =>{
  return{
    type: 'TOGGLE_TODO',
    id
  };
};
