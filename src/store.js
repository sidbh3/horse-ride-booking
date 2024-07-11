// src/store.js
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Define initial state
const initialState = {
  booking: null,
};

// Define a reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOK_HORSE':
      return {
        ...state,
        booking: action.payload,
      };
    default:
      return state;
  }
};

// Create a Redux store
const store = createStore(reducer);

export default store;
