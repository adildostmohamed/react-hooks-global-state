// import the types required for this part of the state tree
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

// define a function that returns the relevant action creator functions that will be shared via context for other components to use to update this part of the state tree
const useActions = (state, dispatch) => {
  const addTodo = todo => {
    const { id, title, completed } = todo;
    return dispatch({
      type: ADD_TODO,
      payload: {
        id,
        title,
        completed
      }
    });
  };

  const removeTodo = todoId => {
    return dispatch({
      type: REMOVE_TODO,
      payload: todoId
    });
  };

  const toggleTodo = todoId => {
    return dispatch({
      type: TOGGLE_TODO,
      payload: todoId
    });
  };

  // return the actions defined within this function
  return {
    addTodo,
    removeTodo,
    toggleTodo
  };
};

export default useActions;
