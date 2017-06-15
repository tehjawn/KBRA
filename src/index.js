import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";

const lightMuiTheme = getMuiTheme(lightBaseTheme);
injectTapEventPlugin();

ReactDOM.render((
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>), 
  document.getElementById('root')
);

registerServiceWorker();