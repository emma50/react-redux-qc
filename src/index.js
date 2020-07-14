import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/AppRouter';
import * as serviceWorker from './serviceWorker';
// import { Provider } from "react-redux";
// import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme/theme';

/**
 * <Provider>
      <App />
    </Provider>
    <CssBaseline/>
 */
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
