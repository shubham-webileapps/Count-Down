import React from 'react';
import { Typography } from '@mui/material';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Typography
      className={isDanger ? 'countdown danger' : 'countdown'}
      variant="div"
    >
      
      <Typography component="p" variant="p" className={}>
        {value}
      </Typography>
      <Typography component="span" variant="span">
        {type}
      </Typography>
    </Typography>
  );
};

export default DateTimeDisplay;
