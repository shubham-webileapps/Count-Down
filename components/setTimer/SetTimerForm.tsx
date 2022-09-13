import React from 'react';

import {
  Button,
  Box,
  CardContent,
  CardActions,
  Card,
  Typography,
} from '@mui/material';
import MyField from './MyField';
import { Formik, Form as MyForm } from 'formik';

import {
  validateSeconds,
  validateDays,
  validateMintus,
  validateHours,
  OnSubmit,
} from './MyFunc';

const SetTimerForm = (props) => {
  const { name } = props;

  
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
          onSubmit={(values, actions) => OnSubmit(values, actions)}
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
export default SetTimerForm;
