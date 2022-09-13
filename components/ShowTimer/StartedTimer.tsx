import * as React from 'react';
import CountdownTimer from './CountdownTimer';
// import '../style.css';
import { Typography } from '@mui/material';

export default function StartedTimer() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  // const time = NOW_IN_MS + 10000;
  const time = 10000;

  return (
    <Typography>
      <Typography variant="h4">Custom Timer !</Typography>
      <CountdownTimer targetDate={time} />
    </Typography>
  );
}
