import thunk from 'redux-thunk'
import { batch } from 'redux-batch-middleware'

const middlewares = [
  thunk,
  batch,
]

const devMiddlewares = [
  ...middlewares,
]

export default {
  prod: middlewares,
  dev: devMiddlewares,
}
