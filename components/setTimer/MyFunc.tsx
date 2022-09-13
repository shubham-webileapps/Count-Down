import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';
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
function OnSubmit(values, actions) {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const { setTimerTime } = bindActionCreators(actionCreators, dispatch);
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
    setTimerTime(newSeconds);

    enqueueSnackbar(values.mintus + ' success');
    // navigate to home
    navigate('/ShowTimer');
  } else {
    enqueueSnackbar('Enter a Valid input');
  }
  actions.resetForm({
    values: {
      days: 0,
      hours: 0,
      mintus: 0,
      seconds: 0,
    },
  });
}

export {
  validateSeconds,
  validateDays,
  validateMintus,
  validateHours,
  OnSubmit,
};
