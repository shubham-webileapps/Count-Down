import React from 'react';

import {
  // Button,
  Box,
  // CardContent,
  Card,
  Typography,
} from '@mui/material';
import TimerForm from './TimerForm';
import TimerFormOld from './TimerFormOld';
const SetTimerForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        {/* <CardContent> */}
        {/* <Typography>
            <Typography gutterBottom variant="h5" sx={{pt:3}}>
              Timer Form With Formik
            </Typography>
            <TimerFormOld />
          </Typography> */}
        <Typography>
          <Typography gutterBottom variant="h5" sx={{ pt: 4 }}>
            Timer Form
          </Typography>
          <TimerForm />
        </Typography>
        {/* </CardContent> */}
      </Card>
    </Box>
  );
};
export default SetTimerForm;
