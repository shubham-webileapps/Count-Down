function validateSeconds(value) {
  let error;
  if ((!value && value !== 0) || value < 0 || value > 59) {
    error = 'Please enter Seconds ';
  }
  return error;
}
function validateDays(value) {
  let error;
  if ((!value && value !== 0) || value < 0) {
    error = 'Please enter Days ';
  }
  return error;
}
function validateMintus(value) {
  let error;
  if ((!value && value !== 0) || value < 0 || value > 59) {
    error = 'Please enter Mintus ';
  }
  return error;
}
function validateHours(value) {
  let error;
  if ((!value && value !== 0) || value < 0 || value > 23) {
    error = 'Please enter Hours ';
  }
  return error;
}
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
    msg = '';
  } else {
    MyhooksConnections.enqueueSnackbar('Enter a Valid input');
  }
}

export {
  validateSeconds,
  validateDays,
  validateMintus,
  validateHours,
  OnSubmit,
};
