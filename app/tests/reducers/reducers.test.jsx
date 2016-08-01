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
});
