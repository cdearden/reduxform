import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import rootReducer from '../reducers/index';
import App from '../app/app';
import exampleData from '../exampleData';


const initialState = {
  services: exampleData.map(service => ({
    id: service.id,
    startDay: service.start_weekday,
    startTime: service.start_time,
    endDay: service.end_weekday,
    endTime: service.end_time,
  })),
};

const store = createStore(rootReducer, initialState);

// TODO: remove this for production.
store.subscribe(() => {
  console.log('Current state: ', store.getState());
});

const history = createBrowserHistory();

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
