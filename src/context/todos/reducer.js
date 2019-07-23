// import the types required for this part of the state tree
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

// define the inital state for this part of the state tree
const initialState = {
  todos: [
    {
      id: Math.floor(Math.random() * Math.floor(100)),
      title: 'Buy milk',
      completed: false
    },
    {
      id: Math.floor(Math.random() * Math.floor(100)),
      title: 'Buy cookies',
      completed: false
    }
  ],
  loaded: true,
  error: undefined
};

// create a reducer function that takes in the current state and an action and returns a new state value based on the action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          let updatedTodo = todo;
          if (todo.id === action.payload) {
            updatedTodo.completed = !todo.completed;
          }
          return updatedTodo;
        })
      };
    default:
      return state;
  }
};

export { initialState, reducer };
