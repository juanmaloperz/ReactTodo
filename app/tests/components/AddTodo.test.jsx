
var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
});

it( 'Should call onaddTodo if a todo is entered',() =>{
    var todoText = 'Jamaica';
    var spy = expect.createSpy();
    var addTodo =  TestUtils.renderIntoDocument(<AddTodo onaddTodo={spy}/>);
      var $el = $(ReactDOM.findDOMNode(addTodo));

      addTodo.refs.todoText.value = todoText;
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);
  });

  it( 'Should not been called if invalid data is entered',() =>{
      var todoText = '';
      var spy = expect.createSpy();
      var addTodo =  TestUtils.renderIntoDocument(<AddTodo onaddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled(todoText);
    });
});
