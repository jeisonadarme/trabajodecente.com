import React from "react";
import PropTypes from "prop-types";

const RadioButtonComponent = ({
  type = "radio",
  name,
  onChange,
  id,
  label,
  checked
}) => (
  <input
    className="form-check-input"
    type={type}
    name={name}
    onChange={onChange}
    htmlFor={id}
    id={id}
    value={label}
    checked={checked}
  />
);

RadioButtonComponent.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default RadioButtonComponent;
