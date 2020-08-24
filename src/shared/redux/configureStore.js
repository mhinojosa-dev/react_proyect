//crear un store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  const middleware = [thunk];

  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
}