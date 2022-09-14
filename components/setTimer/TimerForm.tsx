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
import { Form as MyForm } from 'formik';
import TimeColumn from './timeColumn';
import {
  validateSeconds,
  validateDays,
  validateMintus,
  validateHours,
  // OnSubmit,
} from './MyFunc';
function OnMySubmit(values, actions, MyhooksConnections) {
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
  // actions.resetForm({
  //   values: {
  //     days: 0,
  //     hours: 0,
  //     mintus: 0,
  //     seconds: 0,
  //   },
  // });
}

const TimerForm = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [hour, setHour] = useState('00');
  const [minute, setMinute] = useState('00');
  const dispatch = useDispatch();
  const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
  const MyhooksConnections = { navigate, enqueueSnackbar, setTimerTime };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <MyForm>
          <CardContent>
            <Typography gutterBottom variant="h5" component="span">
              Form
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
                value={hour}
                setValue={setHour}
                // exclude={hourExclude}
              />
              <TimeColumn
                name="hours"
                // notShowExclude={notShowExclude}
                start={0}
                end={23}
                value={hour}
                setValue={setHour}
                // exclude={hourExclude}
              />
              <TimeColumn
                name="mintus"
                // notShowExclude={notShowExclude}
                start={0}
                end={59}
                value={hour}
                setValue={setHour}
                // exclude={hourExclude}
              />
              <TimeColumn
                name="seconds"
                // notShowExclude={notShowExclude}
                start={0}
                end={59}
                value={hour}
                setValue={setHour}
                // exclude={hourExclude}
              />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: 'red' }} type="submit">
              Submit
            </Button>
          </CardActions>
        </MyForm>
      </Card>
    </Box>
  );
};
export default TimerForm;
