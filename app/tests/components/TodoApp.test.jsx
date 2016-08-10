
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');

import TodoList from 'TodoList';

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
});
  it('Shlould render TodoList',() =>{
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
        </Provider>
    );
    var todoAPP = TestUtils.scryRenderedComponentsWithTypeComponentWithType(provider, TodoApp)[0]
    var todoList = TestUtils.scryRenderedComponentWithType(todoApp, TodoApp);

    expect(todoList.length).toEqual[1];
  });
});
