import React from 'react';
import { AppBar } from 'material-ui';
import FormContainer from '../form/formContainer';
import ServiceDisplayContainer from '../servicedisplay/servicedisplayContainer';
import './app.css';


const App = () => (
  <section>
    <AppBar title="Schedule Services" />
    <section className="container">
      <FormContainer />
      <ServiceDisplayContainer />
    </section>
  </section>
);

export default App;
