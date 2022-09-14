import React from 'react';

import { Box, CardActions, Button, Card } from '@mui/material';
import { Link } from 'react-router-dom';

const SetTimerForm = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
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
