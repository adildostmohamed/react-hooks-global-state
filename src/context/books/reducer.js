// import the types required for this part of the state tree
import { ADD_BOOK, REMOVE_BOOK, TOGGLE_BOOK } from './types';

// define the inital state for this part of the state tree
const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * Math.floor(100)),
      title: 'Book number 1',
      author: 'James Archer',
      read: false
    },
    {
      id: Math.floor(Math.random() * Math.floor(100)),
      title: 'Book number 2',
      author: 'Gareth Edwards',
      read: false
    }
  ],
  loaded: true,
  error: undefined
};

// create a reducer function that takes in the current state and an action and returns a new state value based on the action
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };
    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };
    case TOGGLE_BOOK:
      return {
        ...state,
        books: state.books.map(book => {
          let updatedBook = book;
          if (book.id === action.payload) {
            updatedBook.read = !book.read;
          }
          return updatedBook;
        })
      };
    default:
      return state;
  }
};

export { initialState, reducer };
