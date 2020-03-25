import { createAction } from 'redux-actions';
import types from './types';

const _initialize = createAction(types.INITIALIZE);
const initialize = () => _initialize({});

const _doLogin = createAction(types.DO_LOGIN);
const doLogin = (username, password) => _doLogin({ username, password });

export default {
    initialize,
    doLogin,
}