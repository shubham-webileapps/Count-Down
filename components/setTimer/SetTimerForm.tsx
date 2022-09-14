import React from 'react';

import {
  // Button,
  Box,
  CardContent,
  CardActions,
  Card,
  Typography,
} from '@mui/material';
import TimerForm from './TimerForm';
import TimerFormOld from './TimerFormOld';
const SetTimerForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <CardContent>
          <Typography>
            <TimerFormOld />
          </Typography>
          <Typography>
            <TimerForm />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export default SetTimerForm;
