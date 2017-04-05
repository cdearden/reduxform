import React, { PropTypes } from 'react';
import { TimePicker, SelectField } from 'material-ui';


export const renderTimePicker = ({ input, label, meta: { touched, error } }) => (
  <TimePicker
    format="24hr"
    floatingLabelText={label}
    errorText={touched && error}
    onChange={(event, time) => input.onChange(time)}
  />
);

renderTimePicker.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};

export const renderSelectField = ({ input, label, meta: { touched, error }, children}) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
  />
);

renderSelectField.propTypes = {
  input: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired,
};
