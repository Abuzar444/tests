import React, { forwardRef } from "react";

import PropTypes from "prop-types";

const FormRow = forwardRef(
  (
    {
      type,
      name,
      labelText,
      defaultValue = "",
      readOnly = false,
      required = true,
      onChange = () => {},
    },
    ref
  ) => {
    return (
      <div className="form-row">
        <label htmlFor={name} className="form-label">
          {labelText || name}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          className="form-input"
          defaultValue={defaultValue}
          required={required}
          readOnly={readOnly}
          ref={ref}
          onChange={onChange}
        />
      </div>
    );
  }
);

FormRow.displayName = "FormRow";

FormRow.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  defaultValue: PropTypes.any,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
};

export default FormRow;
