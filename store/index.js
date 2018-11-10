import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { batching } from 'redux-batch-middleware'
import middlewares from '../middlewares';
import rootReducers from '../reducers';

export const initStore = (initialState = {}) => {
  return createStore(
    batching(rootReducers),
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)
    )
  )
}
