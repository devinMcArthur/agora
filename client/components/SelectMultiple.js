import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Select from "react-select";

const SelectMultiple = ({
  error,
  info,
  onChange,
  options,
  id,
  placeholder,
  defaultValue
}) => {
  const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: "black",
        cursor: isDisabled ? "not-allowed" : "default"
      };
    },
    input: styles => ({ ...styles }),
    placeholder: styles => ({ ...styles }),
    singleValue: (styles, { data }) => ({ ...styles })
  };

  return (
    <div className="form-group">
      <Select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={onChange}
        isMulti
        options={options}
        styles={colourStyles}
        id={id}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

SelectMultiple.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string,
  info: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.string,
  defaultValue: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};

export default SelectMultiple;
