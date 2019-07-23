// forked from thchia/combineUseReducers.js
import { useReducer } from 'react';

function combineReducers(reducerDict) {
  const _initialState = getInitialState(reducerDict);
  return function(state = _initialState, action) {
    return Object.keys(reducerDict).reduce((acc, curr) => {
      let slice = reducerDict[curr](state[curr], action);
      return { ...acc, [curr]: slice };
    }, state);
  };
}

function useStore(rootReducer, state) {
  // use the value of the state object if provided or get the initial state of the rootReducer by passing in an undefined value for state and an undefined action so that you can get the value of the initial state from the combined reducers
  const initialState = state || rootReducer(undefined, { type: undefined });
  // use the useReducer hook with the rootReducer from the combinedReducer function and the value of the initial state which returns [state, dispatch] that you can utilise
  return useReducer(rootReducer, initialState);
}

function getInitialState(reducerDict) {
  // reduce over all the keys in the reducerDictionary thats being created
  return Object.keys(reducerDict).reduce((acc, curr) => {
    // a reducer is a function which takes in a state value and an action
    // below we extract the default state of a reducer by passing in a state of undefined so that it utilises the initialState as default as defined in the reducer
    // and pass in an action which in this case will trigger the default case of the switch statement in the reducer
    // this means you need to ensure there is a default initial state defined in the reducer and a default case in the switch statement for handling actions
    const slice = reducerDict[curr](undefined, { type: undefined });
    // this returns the default state for the reducer which we add to the key for that reducer from the reducerDict as its initial state
    return { ...acc, [curr]: slice };
  }, {});
}

export { combineReducers, useStore };
