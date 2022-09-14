import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
import {
  Button,
  Box,
  CardContent,
  CardActions,
  Card,
  Typography,
} from '@mui/material';

import TimeColumn from './timeColumn';
import { OnSubmit } from './MyFunc';

const TimerForm = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [hour, setHour] = useState(0);
  const [mintus, setMintus] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [days, setDays] = useState(0);
  const dispatch = useDispatch();
  const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
  const MyhooksConnections = { navigate, enqueueSnackbar, setTimerTime };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ pt: 4 }}>
            Timer Form
          </Typography>
          <Typography
            variant="body2"
            component="div"
            color="text.secondary"
            sx={{ display: 'flex' }}
          >
            <TimeColumn
              name="days"
              start={0}
              end={100}
              value={days}
              setValue={setDays}
              notShowExclude={true}
              // exclude={[1,2]}
            />
            <Typography
              sx={{
                alignItems: 'center',
                fontSize: '110px',
              }}
            >
              :
            </Typography>
            <TimeColumn
              name="hours"
              start={0}
              end={23}
              value={hour}
              setValue={setHour}
              notShowExclude={true}
            />
            <Typography
              sx={{
                alignItems: 'center',
                fontSize: '110px',
              }}
            >
              :
            </Typography>
            <TimeColumn
              name="mintus"
              start={0}
              end={59}
              value={mintus}
              setValue={setMintus}
              notShowExclude={true}
            />
            <Typography
              sx={{
                alignItems: 'center',
                fontSize: '110px',
              }}
            >
              :
            </Typography>
            <TimeColumn
              name="seconds"
              start={0}
              end={59}
              value={seconds}
              setValue={setSeconds}
              notShowExclude={true}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            sx={{ color: '#1976d2' }}
            type="submit"
            onClick={() =>
              OnSubmit(
                {
                  hours: parseInt(hour),
                  mintus: parseInt(mintus),
                  seconds: parseInt(seconds),
                  days: parseInt(days),
                },
                MyhooksConnections
              )
            }
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default TimerForm;
