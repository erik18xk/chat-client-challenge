import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux';
import reducer from './store';
import { composeWithDevTools } from 'redux-devtools-extension'
import sagas from './store/saga';

export default function configureStore(initialState) {
    // Note: passing middleware as the last argument to createStore requires redux@>=3.1.0
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run(sagas)
    }
}