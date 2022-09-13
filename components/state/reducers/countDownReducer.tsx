const reducer = (state = 10, action) => {
  if (action.time) state = action.time;
  return state;
};
export default reducer;
