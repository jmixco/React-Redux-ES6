import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxInmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialSate) {
    return createStore(
        rootReducer,
        initialSate,
        applyMiddleware(reduxInmutableStateInvariant()));
}