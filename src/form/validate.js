
const validate = (values) => {
  const errors = {};
  const requiredFields = ['startDay', 'startTime', 'endDay', 'endTime'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

export default validate;
