
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
  });
it(' Should toggle completed when handletog calles',()=>{
  var dummy = {
    id:11, text: 'lets go', completed:false
  }
   var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
   todoApp.setState({todos: [dummy]});
   expect(todoApp.state.todos[0].completed).toBe(false);
      todoApp.handleToggle(11);
      expect(todoApp.state.todos[0].completed).toBe(true);
});
  });
