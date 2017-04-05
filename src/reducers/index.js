import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { actions } from '../constants';


const deleteService = (services, id) => services.filter(service => service.id !== id);

const services = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_SERVICE:
      return [...state, action.service];
    case actions.DELETE_SERVICE:
      return deleteService(state, action.id);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  services,
  form: formReducer,
});

export default rootReducer;
