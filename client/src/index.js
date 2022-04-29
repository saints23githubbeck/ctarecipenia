import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/globalStyle.scss';
 import { Provider } from "react-redux";
 import configurestore from "./appState/store";

const store = configurestore()
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);