import * as React from 'react';
import CountdownTimer from './CountdownTimer';
// import '../style.css';

export default function StartedTimer() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  const dateTimeAfterSevenDays = NOW_IN_MS + SEVEN_DAYS_IN_MS;
  const time = NOW_IN_MS + 10000;

  return (
    <div>
      <h1>Countdown Timer</h1>

      <h2>Expires after 3 days!!!</h2>
      <CountdownTimer targetDate={dateTimeAfterThreeDays} />

      <h2>Custom Timer !</h2>
      <CountdownTimer targetDate={time} />

      <h2>Expires after 7 days!!!</h2>
      <CountdownTimer targetDate={dateTimeAfterSevenDays} />
    </div>
  );
}
