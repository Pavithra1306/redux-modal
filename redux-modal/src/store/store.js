import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/rootReducer.js';
import {combineReducers} from 'redux';
import watchFetch from '../sagas/saga.js';

const sagaMiddleware = createSagaMiddleware();
const store=createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchFetch);

export default store;