import { 
    createStore, 
    combineReducers, 
    applyMiddleware, 
    compose 
} from "redux"
import ReduxThunk from 'redux-thunk'
import ReduxLogger from "redux-logger"
import authReducer from "../reducers/auth"
import loanReducer from "../reducers/loans"

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) || compose;

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({ 
      auth: authReducer,
      loans: loanReducer,
    }), 
    composeEnhancers(applyMiddleware(ReduxThunk, ReduxLogger))
  )
  return store
}
