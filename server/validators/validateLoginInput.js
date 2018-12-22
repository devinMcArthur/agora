const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !_.isEmpty(data.email) ? data.email : "";
  data.password = !_.isEmpty(data.password) ? data.password : "";

  // Validate the form of the email
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // Validate existance of password
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // Validate existance of email
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
