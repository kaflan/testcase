import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore() {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */
  const middleWares = []; // middleWares
  const enhancer = composeEnhancers(applyMiddleware(...middleWares));
  return createStore(rootReducer, enhancer);
}
