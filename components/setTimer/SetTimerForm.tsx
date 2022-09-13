import React from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
import {
  Button,
  Box,
  CardContent,
  CardActions,
  Card,
  InputAdornment,
  Typography,
  TextField,
} from '@mui/material';
import MyField from './MyField';
import { Formik, Form as MyForm, Field } from 'formik';
// import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

function validateSeconds(value) {
  let error;
  if (!value || value < 0 || value > 59) {
    error = 'Please enter Seconds ';
  }
  return error;
}
function validateDays(value) {
  let error;
  if (!value || value < 0) {
    error = 'Please enter Days ';
  }
  return error;
}
function validateMintus(value) {
  let error;
  if (!value || value < 0 || value > 59) {
    error = 'Please enter Mintus ';
  }
  return error;
}
function validateHours(value) {
  let error;
  if (!value || value < 0 || value > 23) {
    error = 'Please enter Hours ';
  }
  return error;
}

const Form = (props) => {
  const { name } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
  // const { enqueueSnackbar } = useSnackbar();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Card container="true" spacing={2}>
        <Formik
          initialValues={{
            mintus: 0,
          }}
          onSubmit={(values, actions) => {
            if (!isNaN(parseInt(values.mintus)) && values.mintus !== 0) {
              setTimerTime(parseInt(values.mintus));

              // enqueueSnackbar(props.name + ' ' + values.mintus + ' success');
              //navigate to home
              navigate('/');
            }
            actions.resetForm({
              values: {
                mintus: 0,
              },
            });
          }}
        >
          {(props) => (
            <MyForm>
              <CardContent>
                <Typography gutterBottom variant="h5" component="span">
                  {name} Form
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                >
                  <MyField
                    name="mintus"
                    validate={props.validateMintus}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    error={props.errors.mintus}
                  />
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{ color: 'red' }} type="submit">
                  {name}
                </Button>
              </CardActions>
            </MyForm>
          )}
        </Formik>
      </Card>
    </Box>
  );
};
export default Form;
