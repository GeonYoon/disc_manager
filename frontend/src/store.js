import {compose, createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

// Redux dev tool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  // const persistedFilter = createFilter(
  //   'auth', ['access', 'refresh']);
  const reducer = persistReducer(
    {
      key: 'polls',
      storage: storage
    },
    rootReducer)
  const store = createStore(
    reducer, {},
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
  persistStore(store)
  return store
}
