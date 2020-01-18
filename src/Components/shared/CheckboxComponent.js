import React from "react";
import PropTypes from "prop-types";

const CheckboxComponent = ({
  type = "checkbox",
  name,
  checked,
  onChange,
  value
}) => (
  <input
    className="form-check-input"
    type={type}
    name={name}
    checked={checked}
    onChange={onChange}
    value={value}
  />
);

CheckboxComponent.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired
};

export default CheckboxComponent;
