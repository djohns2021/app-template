import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './createStore';
import Main from 'containers/MainContainer';

const store = createStore();

export default class MainApp extends Component {
  static displayName = 'MainApp';

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
};

ReactDOM.render(
  <MainApp/>
  , document.getElementById('root')
);
