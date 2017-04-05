import { connect } from 'react-redux';
import ServiceDisplay from './servicedisplay';
import { deleteService } from '../actions/actions';


const mapStateToProps = state => ({
  services: state.services,
});

const mapDispatchToProps = dispatch => ({
  handleDelete: id => dispatch(deleteService(id)),
});

const ServiceDisplayContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(ServiceDisplay);

export default ServiceDisplayContainer;
