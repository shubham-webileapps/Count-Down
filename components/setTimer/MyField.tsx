import React from 'react';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { InputAdornment, TextField } from '@mui/material';
import { Field } from 'formik';

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
      // placeholder="0-59"
      component={TextField}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        // startAdornment: (
        //   <InputAdornment position="start">
        //     <CurrencyRupeeIcon />
        //   </InputAdornment>
        // ),
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
    />
    // <Field
    //                 // className=" form-control"
    //                 name="amount"
    //                 id="amount"
    //                 label="Amount"
    //                 aria-describedby="inputGroupPrepend2"
    //                 validate={validateAmount}
    //                 type="number"
    //                 placeholder="100"
    //                 component={TextField}
    //                 InputLabelProps={{
    //                   shrink: true,
    //                 }}
    //                 InputProps={{
    //                   startAdornment: (
    //                     <InputAdornment position="start">
    //                       <CurrencyRupeeIcon />
    //                     </InputAdornment>
    //                   ),
    //                   inputProps: { min: 0 },
    //                 }}
    //                 variant="standard"
    //                 onChange={props.handleChange}
    //                 onBlur={props.handleBlur}
    //                 helperText={props.errors.amount}
    //                 required
    //                 onInvalid={(e, msg = props.errors.amount) =>
    //                   e.target.setCustomValidity(
    //                     msg ? msg : 'Please enter an amount'
    //                   )
    //                 }
    //                 error={!!props.errors.amount}
    //               />
  );
};

export default MyField;
