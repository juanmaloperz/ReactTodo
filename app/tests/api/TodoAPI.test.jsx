var expect = require('expect');
var TodoAPI = require('TodoAPI')

describe ('TodoApi', ()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('Should Exist',()=>{
    expect(TodoAPI).toExist();
  });
  describe('setTodos',()=>{

    it(' Shoulset with  valid data',()=>{
      var todos = [{id:29, text:'Should i stay or shoul i go', completed: false}];
      TodoAPI.setTodos(todos);
       var actual = JSON.parse(localStorage.getItem('todos'));

       expect(actual).toEqual(todos);
    });
    it('Shlould not set with invalid data',()=>{
      var faketodos = {a:'b'};
      TodoAPI.setTodos(faketodos)
      var actualfake = JSON.parse(localStorage.getItem('faketodos'));

      expect (actualfake).toBe(null)
    });
  });
  describe('getTodos',()=>{
    it( 'Should not render with invalid data',()=>{
        var actualTodos = TodoAPI.getTodos();
        expect(actualTodos).toEqual([]);
    });
    it(' Should render with valid data',()=>{
      var todos = [{id:29, text:'Should i stay or shoul i go', completed: false}];
      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
});
