const initialState = {
  booking: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'BOOK_HORSE':
      return { ...state, booking: action.payload };
    default:
      return state;
  }
}

export default reducer;
