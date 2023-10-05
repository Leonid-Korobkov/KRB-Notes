import { createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

// npm i redux react-redux
export const store = createStore(rootReducer, composeWithDevTools())
