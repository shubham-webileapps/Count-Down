import React from 'react';
import { Typography } from '@mui/material';

const DateTimeDisplay = ({ value, type, isDanger = false }) => {
  return (
    <Typography
      className={isDanger ? 'countdown danger' : 'countdown'}
      variant="div"
    >
      <Typography component="p" variant="p">
        {value}
      </Typography>
      <Typography component="span" variant="span">
        {type}
      </Typography>
    </Typography>
  );
};

export default DateTimeDisplay;
