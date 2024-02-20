import { applyMiddleware, combineReducers, createStore } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,
});

// export const store = createStore(rootReducer, applyMiddleware(thunk));
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
