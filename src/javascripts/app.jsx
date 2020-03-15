import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import 'whatwg-fetch';
import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import 'styles/style';

// layouts
import Main from 'javascripts/layouts/main';

// store
import configureStore from 'javascripts/store/config';

const store = configureStore();

function App() {
  return (
    <AppContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </AppContainer>
  );
}

const rootElement = document.getElementById('main');
ReactDOM.render(<App />, rootElement);

if (module.hot) {
  module.hot.accept('./layouts/main', () => {
    render();
  });
}
