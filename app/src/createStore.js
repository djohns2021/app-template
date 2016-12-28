import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from 'reducers/index';

export default function() {
  const finalCreateStore = compose(
    // applyMiddleware(
    //   ...middleware
    // )
    // debug tools
     window.devToolsExtension ? window.devToolsExtension() : undefined
  )(createStore);

  const store = finalCreateStore(rootReducer);

  return store;
}
