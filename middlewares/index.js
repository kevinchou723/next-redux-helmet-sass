import thunk from 'redux-thunk'
import { batch } from 'redux-batch-middleware'

export default [
  thunk,
  batch,
]
