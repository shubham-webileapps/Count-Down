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

export { validateSeconds, validateDays, validateMintus, validateHours };
