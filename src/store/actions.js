import { createAction } from 'redux-actions';
import types from './types';

const _initialize = createAction(types.INITIALIZE);
const initialize = () => _initialize({});

const _doLogin = createAction(types.DO_LOGIN);
const doLogin = (username, password) => _doLogin({ username, password });

const _setUser = createAction(types.SET_USER);
const setUser = detail => _setUser({ detail });

const _setContacts = createAction(types.SET_CONTACTS);
const setContacts = detail => _setContacts({ detail });

export default {
    initialize,
    doLogin,
    setUser,
    setContacts,
}