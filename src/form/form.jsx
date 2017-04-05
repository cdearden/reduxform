import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { MenuItem, RaisedButton } from 'material-ui';
import validate from './validate';
import { renderSelectField, renderTimePicker } from './renderers';
import { WEEK_DAYS } from '../constants';


let ContactForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field name="startDay" component={renderSelectField} label="Start Day" type="select">
        {WEEK_DAYS.map((day, i) => (
          <MenuItem key={day} value={i} primaryText={day} />
        ))}
      </Field>
    </div>
    <div>
      <Field id="startTime" name="startTime" component={renderTimePicker} type="select" label="Start Time" />
    </div>
    <div>
      <Field name="endDay" component={renderSelectField} label="End Day" type="select">
        {WEEK_DAYS.map((day, i) => (
          <MenuItem key={day} value={i} primaryText={day} />
        ))}
      </Field>
    </div>
    <div>
      <Field id="endTime" name="endTime" component={renderTimePicker} type="select" label="End Time" />
    </div>
    <br />
    <RaisedButton type="submit">Create</RaisedButton>
  </form>
);


ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact', // a unique name for this form
  validate,
})(ContactForm);

export default ContactForm;
