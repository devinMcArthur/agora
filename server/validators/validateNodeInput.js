const Validator = require("validator");
const _ = require("lodash");

module.exports = function validateNodeInput(data) {
  let errors = {};

  data.title = !_.isEmpty(data.title) ? data.title : "";
  data.content = !_.isEmpty(data.content) ? data.content : "";

  // Validate length of title
  if (!Validator.isLength(data.title, { max: 70 })) {
    errors.title = "Title must be shorter than 70 characters";
  }

  // Validate existance of password
  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
};
