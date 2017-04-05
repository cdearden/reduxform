import { connect } from 'react-redux';
import ContactForm from './form';
import { addService } from '../actions/actions';


const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => {
    const { startDay, startTime, endDay, endTime } = values;
    const service = {
      startDay,
      startTime: startTime.toLocaleTimeString('en-GB'),
      endDay,
      endTime: endTime.toLocaleTimeString('en-GB'),
    };
    dispatch(addService(service));
  },
});

const FormContainer = connect(
  null,
  mapDispatchToProps)(ContactForm);

export default FormContainer;
