var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');


describe('Reducers', ()=>{
  describe('searchTextReducer',()=>{
it('Shloud set SearchText', () => {
  var action = {
    type: 'SET_SEARCH_TEXT',
    searchText: 'dog'
  };
  var res = reducers.searchTextReducer(df(''),df (action));
  expect(res).toEqual(action.searchText);
  });
});
  describe('showCompletedReducer',() =>{
  it('Shloud call the Reducer showCompletedReducer', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };
    var res = reducers.showCompletedReducer(df(false),df(action));
    expect(res).toEqual(true);
    });
  });
   describe('todosReducer',()=>{
     it( 'Shloud add a Todo', ()=>{
       var action ={
         type:'ADD_TODO',
         text: ' Plaing good'
       };
    var res = reducers.todosReducer(df([]), df(action));
     expect(res.length).toEqual(1);
     expect(res[0].text).toEqual(action.text);
     });
     it('Shloud add exising todos',()=>{
       var todos = [{
             id: '111',
             text: 'anything',
             completed: 'false',
             completedAt: undefined,
             createdAt: 33000
       }];
       var actio = {
         type: 'ADD_TODOS',
         todos
       };
       var res = reducers.todosReducer(df([]),df(action));
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual((todos[0]));
     })
   });
});
