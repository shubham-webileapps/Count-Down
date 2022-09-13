import React from 'react';
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
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  const [days, hours, minutes, seconds] = useCountdown(remainingTime);
  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <CountdownCircleTimer
        isPlaying
        duration={targetDate}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
        // onComplete={() => [true, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
    );
  }
};

export default CountdownTimer;
