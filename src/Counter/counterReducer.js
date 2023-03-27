function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return state + 1;
    case "DECREMENT_COUNT":
      return state - 1;
    case "RESET_COUNT":
      return 0;
    case "INCREMENT_COUNT_BY_VALUE":
      return state + action.payload;
    default:
      return state;
  }
}
export default reducer;
