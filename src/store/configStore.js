import { 
    createStore, 
    combineReducers, 
    applyMiddleware, 
    compose 
} from "redux"
import ReduxThunk from 'redux-thunk'
import ReduxLogger from "redux-logger"
import authReducer from "../reducers/auth"

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) || compose;

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({ 
      auth: authReducer,
    }), 
    composeEnhancers(applyMiddleware(ReduxThunk, ReduxLogger))
  )
  return store
}
