import React from 'react';

import {
  Box,
  CardContent,
  CardActions,
  Button,
  Card,
  Typography,
} from '@mui/material';
import TimerForm from './TimerForm';
import TimerFormOld from './TimerFormOld';
import { Link } from 'react-router-dom';

const SetTimerForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        {/* <CardContent>
          <Typography>
            <Typography gutterBottom variant="h5" sx={{ pt: 3 }}>
              Timer Form
            </Typography>
            <TimerFormOld />
          </Typography>
          <Typography>
            <Typography gutterBottom variant="h5" sx={{ pt: 4 }}>
              Timer Form
            </Typography>
            <TimerForm />
          </Typography>
        </CardContent> */}
        <CardActions>
          <Button
            size="small"
            sx={{ color: '#1976d2' }}
            component={Link}
            to="/TimerFormOld"
          >
            {' '}
            Timer Form 1
          </Button>
          <Button
            size="small"
            sx={{ color: '#1976d2' }}
            component={Link}
            to="/TimerForm"
          >
            {' '}
            Timer Form 2{' '}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default SetTimerForm;
