import React from 'react';
import ReactDOM from 'react-dom';import { Router } from 'react-router-dom'
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';
import theme from './components/theme/theme';
import configStore from "./store/configStore";
import history from './helpers/history'
import App from './routers/AppRouter';

const store = configStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router history={history}>
      <App/>
      </Router>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
