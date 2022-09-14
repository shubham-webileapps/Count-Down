import React from 'react';
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
import MyField from './MyField';
// import MyField from './NewSetTimer';
import { Formik, Form as MyForm } from 'formik';

import {
  validateSeconds,
  validateDays,
  validateMintus,
  validateHours,
  OnSubmit,
} from './MyFunc';

const TimerFormOld = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
  const MyhooksConnections = { navigate, enqueueSnackbar, setTimerTime };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <Formik
          initialValues={{
            days: 0,
            hours: 0,
            mintus: 0,
            seconds: 0,
          }}
          onSubmit={(values, actions) =>
            OnSubmit(values, actions, MyhooksConnections)
          }
        >
          {(props) => (
            <MyForm>
              <CardContent>
                <Typography gutterBottom variant="h5" sx={{ pt: 4 }}>
                  Timer Form
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  <MyField
                    name="days"
                    validate={validateDays}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.errors.days}
                  />
                  <MyField
                    name="hours"
                    validate={validateHours}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.errors.hours}
                  />
                  <MyField
                    name="mintus"
                    validate={validateMintus}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.errors.mintus}
                  />
                  <MyField
                    name="seconds"
                    validate={validateSeconds}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.errors.seconds}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'red' }} type="submit">
                  Submit
                </Button>
              </CardActions>
            </MyForm>
          )}
        </Formik>
      </Card>
    </Box>
  );
};
export default TimerFormOld;
