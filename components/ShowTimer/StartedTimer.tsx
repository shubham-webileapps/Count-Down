import * as React from 'react';
import CountdownTimer from './CountdownTimer';
import { Typography } from '@mui/material';

export default function StartedTimer() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60;
  const time = 1;

  return (
    <Typography>
      <Typography variant="h4">Custom Timer !</Typography>
      <CountdownTimer targetDate={time} />
    </Typography>
  );
}
