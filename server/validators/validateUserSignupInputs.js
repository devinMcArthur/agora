const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateWebAdminSignupInput(data) {
  let errors = {};

  // Make attributes empty string if empty
  data.name = !_.isEmpty(data.name) ? data.name : "";
  data.email = !_.isEmpty(data.email) ? data.email : "";
  data.password = !_.isEmpty(data.password) ? data.password : "";
  data.passconfirm = !_.isEmpty(data.passconfirm) ? data.passconfirm : "";

  // Validate name length
  if (!Validator.isLength(data.name, { min: 1, max: 60 })) {
    errors.name = "Name must be between 1 and 60 characters";
  }

  // Validate existance of name
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Validate existance of email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Validate the form of the email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Validate existance of password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Validate length of password
  if (!Validator.isLength(data.password, { min: 6, max: 60 })) {
    errors.password = "Password must be at least 6 characters";
  }

  // Validate existance of password confirmation
  if (Validator.isEmpty(data.passwordConfirm)) {
    errors.passwordConfirm = "You must confirm your password";
  }

  // Ensure that password and password confirmation are matching
  if (!Validator.equals(data.password, data.passwordConfirm)) {
    errors.passwordConfirm = "Passwords must match";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
