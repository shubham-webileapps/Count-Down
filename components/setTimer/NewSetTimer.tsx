import React from 'react';
import { TextField, Typography } from '@mui/material';
import { Field } from 'formik';
// import TimeColumn from 'react-timeit/atom/timeColumn';
// import TimeColumn from "./atom/timeColumn";
const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
const MyField = (props) => {
  return (
    <Field
      // className=" form-control"
      name={props.name}
      id={props.name}
      defaultValue={0}
      label={capitalize(props.name)}
      aria-describedby="inputGroupPrepend2"
      validate={props.validate}
      type="number"
      component={TextField}
      // variant={TimeColumn}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        inputProps: { min: 0 },
      }}
      variant="standard"
      onChange={props.onChange}
      onBlur={props.onBlur}
      helperText={props.error}
      required
      onInvalid={(e, msg = props.error) =>
        e.target.setCustomValidity(msg ? msg : 'Please enter an value')
      }
      error={!!props.error}
      sx={{ m: 2, maxWidth: 70 }}
    />
  );
};

export default MyField;
