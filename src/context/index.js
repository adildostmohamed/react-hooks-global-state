import React, { createContext, useReducer } from 'react';
import { combineReducers, useStore } from 'utils/combineReducers';
import {
  initialState as todosInitialState,
  reducer as todosReducer,
  useActions as useTodosActions
} from 'context/todos';
import {
  initialState as booksInitialState,
  reducer as booksReducer,
  useActions as useBooksActions
} from 'context/books';

// use createContext to intialise a context for the overall store which you dont need to provide any default values to as it will be set with the initial value of state from the useReducer/useStore function in the StoreProvider component
const StoreContext = createContext();

// use the combineReducers function to combine multiple reducers that you might have together and provide a key for how they will be accessed from state
const rootReducer = combineReducers({
  todos: todosReducer,
  books: booksReducer
});

// if you choose not to use the useStore function but instead use useReducer you will need to pass in the initial state yourself and you need to make sure you provide  the same key for each part of the state as you have in the combineReducers function
const initialState = { todos: todosInitialState, books: booksInitialState };

// create the StoreProvider component that takes in children so you can use it to wrap your app component so that you can pass the context values to child items
const StoreProvider = ({ children }) => {
  // use the useStore function to initialise the state of the store based on the shape of the combinedReducers which under the hood uses the useReducer function but creates the initialState from the reducers rather than needing it  to be passed in
  const [state, dispatch] = useStore(rootReducer);

  // alternatively can use useReducer(rootReducer, initialState) as long as you ensure when you combine the initial states of the different state trees you key them by the same keys as in the combineReducer function
  // const [state, dispatch] = useReducer(rootReducer, initialState);

  // activate your actions by passing in the state and dispatch values
  // you can pass down these actions as a key value on the action object as below or you can choose to desctructure them
  const todosActions = useTodosActions(state, dispatch);
  const booksActions = useBooksActions(state, dispatch);

  return (
    <StoreContext.Provider
      value={{ state, dispatch, actions: { todosActions, booksActions } }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
