import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
const ExpiredNotice = () => {
  return (
    <Typography className="expired-notice" component="div">
      <Typography component="span">Expired!!!</Typography>
      <Typography component="p">Please select a time.</Typography>
      <Button component={Link} size="small" sx={{ color: 'red' }} to="/">
        Set Timer
      </Button>
    </Typography>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Typography variant="div" className="show-counter">
      <Typography
        component="a"
        variant="a"
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
  const mytime = remainingTime;
  const days = Math.floor(mytime / 86400);
  const hours = Math.floor(mytime / 3600);
  const minutes = Math.floor((mytime % 3600) / 60);
  const seconds = mytime % 60;

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
      updateInterval={0}
      isPlaying
      duration={targetDate}
      colors={['#004777', '#1976d2', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[
        targetDate * 0.9,
        targetDate * 0.75,
        targetDate * 0.5,
        targetDate * 0.2,
        0,
      ]}
      // onComplete={() => [true, 1000]}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default CountdownTimer;
