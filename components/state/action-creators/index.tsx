export const setTimerTime = (time) => {
  return (dispatch) => {
    dispatch({
      time: time,
      type: 'number',
    });
  };
};
