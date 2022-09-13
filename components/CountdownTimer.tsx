import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import { useCountdown } from './useCountdown';
import { Typography } from '@mui/material';
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
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <Typography variant="p">:</Typography>
        <DateTimeDisplay
          value={hours}
          type={'Hours'}
          isDanger={hours <= 3 && days <= 3}
        />
        <Typography variant="p">:</Typography>
        <DateTimeDisplay
          value={minutes}
          type={'Mins'}
          isDanger={hours <= 3 && days <= 3 && minutes <= 3}
        />
        <Typography variant="p">:</Typography>
        <DateTimeDisplay
          value={seconds}
          type={'Seconds'}
          isDanger={hours <= 3 && days <= 3 && minutes <= 3 && seconds <= 5}
        />
      </Typography>
    </Typography>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

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

export default CountdownTimer;
