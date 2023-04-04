const Validation = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "Username Required";
  } else if (values.username.length < 5) {
    errors.username = "Must be more than 5";
  }
  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 5) {
    errors.password = "Password must be more than 5";
  }
  return errors;
};
export default Validation;
