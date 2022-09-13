import * as React from 'react';
import CountdownTimer from './CountdownTimer';
import { Typography, Box, Card } from '@mui/material';
import { useSelector } from 'react-redux';

export default function StartedTimer() {
  const time = useSelector((state) => state.time);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2} sx={{ p: 3 }}>
        <Typography variant="div">
          <Typography variant="h5">Custom Timer !</Typography>
          <CountdownTimer targetDate={parseInt(time)} />
        </Typography>
      </Card>
    </Box>
  );
}
