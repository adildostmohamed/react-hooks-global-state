// import the types required for this part of the state tree
import { ADD_BOOK, REMOVE_BOOK, TOGGLE_BOOK } from './types';

// define a function that returns the relevant action creator functions that will be shared via context for other components to use to update this part of the state tree
const useActions = (state, dispatch) => {
  const addBook = book => {
    const { id, title, completed } = book;
    return dispatch({
      type: ADD_BOOK,
      payload: {
        id,
        title,
        completed
      }
    });
  };

  const removeBook = bookId => {
    return dispatch({
      type: REMOVE_BOOK,
      payload: bookId
    });
  };

  const toggleBook = bookId => {
    return dispatch({
      type: TOGGLE_BOOK,
      payload: bookId
    });
  };

  // return the actions defined within this function
  return {
    addBook,
    removeBook,
    toggleBook
  };
};

export default useActions;
