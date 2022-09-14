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
// import MyField from './MyField';
// import MyField from './NewSetTimer';
import { Form as MyForm, Formik } from 'formik';
import TimeColumn from './timeColumn';
// import {
//   validateSeconds,
//   validateDays,
//   validateMintus,
//   validateHours,
//   // OnSubmit,
// } from './MyFunc';
let msg = 'Succussfully Set A Timer For ';
function OnSubmit(values, MyhooksConnections) {
  if (
    !isNaN(parseInt(values.mintus)) &&
    values.mintus >= 0 &&
    values.mintus < 60 &&
    !isNaN(parseInt(values.hours)) &&
    values.hours >= 0 &&
    values.hours < 24 &&
    !isNaN(parseInt(values.seconds)) &&
    values.seconds >= 0 &&
    values.seconds < 60 &&
    !isNaN(parseInt(values.days)) &&
    values.days >= 0 &&
    !(
      values.days === 0 &&
      values.seconds === 0 &&
      values.hours === 0 &&
      values.mintus === 0
    )
  ) {
    const newSeconds =
      ((parseInt(values.days) * 24 + parseInt(values.hours)) * 60 +
        parseInt(values.mintus)) *
        60 +
      parseInt(values.seconds);
    MyhooksConnections.setTimerTime(newSeconds);
    if (values.days !== 0) msg = msg + values.days + ' Days ';
    if (values.hours !== 0) msg = msg + values.hours + ' Hours';
    if (values.mintus !== 0) msg = msg + values.mintus + ' Mintus';
    if (values.seconds !== 0) msg = msg + values.seconds + ' Seconds.';
    MyhooksConnections.enqueueSnackbar(msg);
    // navigate to home
    MyhooksConnections.navigate('/ShowTimer');
  } else {
    MyhooksConnections.enqueueSnackbar('Enter a Valid input');
  }
}

const TimerForm = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [hour, setHour] = useState('00');
  const [mintus, setMintus] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [days, setDays] = useState('00');
  const dispatch = useDispatch();
  const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
  const MyhooksConnections = { navigate, enqueueSnackbar, setTimerTime };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            Timer Form 2
          </Typography>
          <Typography
            variant="body2"
            component="div"
            color="text.secondary"
            sx={{ display: 'flex' }}
          >
            <TimeColumn
              name="days"
              // notShowExclude={notShowExclude}
              start={0}
              end={100}
              value={days}
              setValue={setDays}
              // exclude={hourExclude}
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
              // notShowExclude={notShowExclude}
              start={0}
              end={23}
              value={hour}
              setValue={setHour}
              // exclude={hourExclude}
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
              // notShowExclude={notShowExclude}
              start={0}
              end={59}
              value={mintus}
              setValue={setMintus}
              // exclude={hourExclude}
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
              // notShowExclude={notShowExclude}
              start={0}
              end={59}
              value={seconds}
              setValue={setSeconds}
              // exclude={hourExclude}
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
                  hours: hour,
                  mintus: mintus,
                  seconds: seconds,
                  days: days,
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
