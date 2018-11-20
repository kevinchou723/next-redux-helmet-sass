import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { batching } from 'redux-batch-middleware'
import middlewares from '../middlewares';
import rootReducers from '../reducers';


export const initStore = (initialState = {}) => {
  let middleware;
  if (process.env.NODE_ENV !== 'production') {
    middleware = composeWithDevTools(applyMiddleware(...middlewares.dev));
  } else {
    middleware = applyMiddleware(...middlewares.prod);
  }
  return createStore(
    batching(rootReducers),
    initialState,
    middleware,
  )
}
