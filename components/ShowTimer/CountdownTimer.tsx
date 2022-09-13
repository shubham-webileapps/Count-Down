import React, { useState } from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import { Typography } from '@mui/material';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
const ExpiredNotice = () => {
  return (
    <Typography className="expired-notice" component="div">
      <Typography component="span">Expired!!!</Typography>
      <Typography component="p">
        Please select a future date and time.
      </Typography>
    </Typography>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Typography variant="div" className="show-counter">
      <Typography
        component="a"
        variant="a"
        // href="https://tapasadhikary.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
      >
        <DateTimeDisplay value={days} type={'Day'} isDanger={days <= 3} />
        <Typography variant="p">:</Typography>
        <DateTimeDisplay
          value={hours}
          type={'Hour'}
          isDanger={hours <= 3 && days <= 3}
        />
        <Typography variant="p">:</Typography>
        <DateTimeDisplay
          value={minutes}
          type={'Min'}
          isDanger={hours <= 3 && days <= 3 && minutes <= 3}
        />
        <Typography variant="p">:</Typography>
        <DateTimeDisplay
          value={seconds}
          type={'Sec'}
          isDanger={hours <= 3 && days <= 3 && minutes <= 3 && seconds <= 5}
        />
      </Typography>
    </Typography>
  );
};
const renderTime = ({ remainingTime }) => {
  // const [days, hours, minutes, seconds] = useCountdown(remainingTime);
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  const days = getTimeDays(remainingTime);
  const hours = getTimeHours(remainingTime);
  const minutes = getTimeMinutes(remainingTime);
  const seconds = getTimeSeconds(remainingTime);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

const CountdownTimer = ({ targetDate }) => {
  return (
    <CountdownCircleTimer
      updateInterval={null}
      isPlaying
      duration={targetDate}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
      // onComplete={() => [true, 1000]}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;
