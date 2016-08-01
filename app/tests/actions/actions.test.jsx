var expect = require('expect');
var actions = require('actions');


describe('Actions', ()=>{
it('Shloud call the actions', () => {
  var action = {
    type: 'SET_SEARCH_TEXT',
    searchText: 'Some Search Text'
  };
  var res = actions.setSearchText(action.searchText);
  expect(res).toEqual(action);
});
it('Shloud call the actions ADD TODO', () => {
  var action = {
    type: 'ADD_TODO',
    text: 'Something todo '
  };
  var res = actions.addTodo(action.text);
  expect(res).toEqual(text);
});
it('Shloud call the actions TOGGLE Show Completed', () => {
  var action = {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
  var res = actions.toggleShowCompleted();
  expect(res).toEqual(action);
});
it('Shloud call the actions TOGGLE To do', () => {
  var action = {
    type: 'TOGGLE_TODO',
    id: '3'
  };
  var res = actions.toggleTodo(action.id);
  expect(res).toEqual(id);
});
});
