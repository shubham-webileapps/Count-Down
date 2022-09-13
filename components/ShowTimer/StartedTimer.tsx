import * as React from 'react';
import CountdownTimer from './CountdownTimer';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state/index';
// import { bindActionCreators } from 'redux';

export default function StartedTimer() {
  const time = useSelector((state) => state.time);
  // const dispatch = useDispatch();
  // const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60;
  // const time = 1;

  return (
    <Typography variant="div">
      <Typography variant="h5">Custom Timer !</Typography>
      <CountdownTimer targetDate={parseInt(time)} />
    </Typography>
  );
}
