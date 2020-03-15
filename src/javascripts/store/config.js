import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import monitorReducersEnhancer from 'javascripts/store/enhancers/monitorReducer';
import loggerMiddleware from 'javascripts/store/middlewares/logger';
import rootReducers from 'javascripts/store/reducers';

export default function configureStore(preloadedState) {
  const middlewares = [ loggerMiddleware, thunkMiddleware ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [ middlewareEnhancer, monitorReducersEnhancer ];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducers, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducers));
  }

  return store;
}
