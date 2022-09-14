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

let msg = 'Succussfully Set A Timer For ';
function OnSubmit(values, MyhooksConnections) {
  if (
    !isNaN(values.mintus) &&
    values.mintus >= 0 &&
    values.mintus < 60 &&
    !isNaN(values.hours) &&
    values.hours >= 0 &&
    values.hours < 24 &&
    !isNaN(values.seconds) &&
    values.seconds >= 0 &&
    values.seconds < 60 &&
    !isNaN(values.days) &&
    values.days >= 0 &&
    !(
      values.days === 0 &&
      values.seconds === 0 &&
      values.hours === 0 &&
      values.mintus === 0
    )
  ) {
    const newSeconds =
      ((values.days * 24 + values.hours) * 60 + values.mintus) * 60 +
      values.seconds;
    MyhooksConnections.setTimerTime(newSeconds);
    if (values.days !== 0) msg = msg + values.days + ' Days ';
    if (values.hours !== 0) msg = msg + values.hours + ' Hours ';
    if (values.mintus !== 0) msg = msg + values.mintus + ' Mintus ';
    if (values.seconds !== 0) msg = msg + values.seconds + ' Seconds.';
    MyhooksConnections.enqueueSnackbar(msg);
    msg = '';
    // navigate to home
    MyhooksConnections.navigate('/ShowTimer');
  } else {
    MyhooksConnections.enqueueSnackbar('Enter a Valid input');
  }
}

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
            sx={{ color: 'red' }}
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
