
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
});
it('should render one Todo component for each todo item', () => {
  var todos = [{
    id: 1,
    text: 'Do something'
  }, {
    id: 2,
    text: 'Check mail'
  }];
  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todo}/>);
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, todo);

  expect(todosComponents.length).toBe(todos.length);
});
});
