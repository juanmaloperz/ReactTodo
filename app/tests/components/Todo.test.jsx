
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
});
it('Shloud call ontoggle when the click is pressed',()=>{
var dummy = {
  id:199, text:'Mc is the moment',
  completed: true
}
var spy = expect.createSpy();
var todo = TestUtils.renderIntoDocument(<Todo {...dummy} onToggle={spy}/>);
var $el = $(ReactDOM.findDOMNode(todo));
      TestUtils.Simulate.click($el[0]);  // Look the roor of the element return todo
   expect(spy).toHaveBeenCalledWith(199);
});
});
