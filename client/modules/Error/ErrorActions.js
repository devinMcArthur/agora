export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const GET_ERRORS = "GET_ERRORS";

// Clear all errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
    payload: {}
  };
};
