import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Root from './root/root';


// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Root />
  </MuiThemeProvider>
  , document.getElementById('root'));
