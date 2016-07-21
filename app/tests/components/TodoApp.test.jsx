
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
});
it('should return the value that was added',()=>{
   var todoText = 'test';
   var spy = expect.createSpy();
  var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

   todoApp.setState({todos: []});
   todoApp.handleAddTodo(todoText);

   expect(todoApp.state.todos[0].text).toBe(todoText);
   expect(todoApp.state.todos[0].createdAt).toBeA('number');

  });
it(' Should toggle completed when handletog calles',()=>{
  var dummy = {
    id:11, text: 'lets go', completed:false , createdAt:0, completedAt: undefined,
  }
   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
   todoApp.setState({todos: [dummy]});
   expect(todoApp.state.todos[0].completed).toBe(false);
      todoApp.handleToggle(11);
      expect(todoApp.state.todos[0].completed).toBe(true);
      expect(todoApp.state.todos[0].completedAt).toBeA('number');

});
it(' test when toggle from true to false, completedAT get remove',()=>{
  var dummy = {
    id:11, text: 'lets go', completed:true , createdAt:0, completedAt: 123,
  }
   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
   todoApp.setState({todos: [dummy]});
   expect(todoApp.state.todos[0].completed).toBe(true);
      todoApp.handleToggle(11);
      expect(todoApp.state.todos[0].completed).toBe(false);
      expect(todoApp.state.todos[0].completedAt).toNotExist();
  });
});
