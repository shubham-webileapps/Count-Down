export const setTimerTime = (mtime) => {
  return (dispatch) => {
    dispatch({
      time: mtime,
    });
  };
};
