import * as React from 'react';
import CountdownTimer from './CountdownTimer';
// import '../style.css';
import { Typography } from '@mui/material';
export default function StartedTimer() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
  const time = NOW_IN_MS + 10000;

  return (
    <Typography>
      <Typography variant="h3">Countdown Timer</Typography>

      <Typography variant="h4">Expires after 3 days!!!</Typography>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />

      <Typography variant="h4">Custom Timer !</Typography>
      <CountdownTimer targetDate={time} />
    </Typography>
  );
}
