import test from 'tape';

import todoReducer from '../../src/app/reducers/todos';
import { ADD_TODO, REMOVE_TODO } from '../../src/app/actions';

test('add todo', addTodo);

function addTodo(t) {
  t.plan(3);

  t.deepEqual(
    todoReducer(undefined, {}),
    [],
    'it should return default state',
  );

  t.deepEqual(
    todoReducer([], {
      type: ADD_TODO,
      title: 'test',
    }),
    [{
      title: 'test'
    }],
    'it should add a todo to the state',
  );
  t.deepEqual(
    todoReducer([
      {
        title: 'test',
      },
      {
        title: 'anothertest'
      }], {
      type: REMOVE_TODO,
      title: 'test',
    }),
    [{
      title: 'anothertest'
    }],
    'it should remove a todo from the state',
  );

}
