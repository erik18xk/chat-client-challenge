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

const _fetchMessagesById = createAction(types.FETCH_MESSAGES_BY_ID);
const fetchMessagesById = detail => _fetchMessagesById({ detail });

const _setMessagesById = createAction(types.SET_MESSAGES_BY_ID);
const setMessagesById = detail => _setMessagesById({ detail });

const _sendMessage = createAction(types.SEND_MESSAGE);
const sendMessage = detail => _sendMessage({ detail });

export default {
    initialize,
    doLogin,
    setUser,
    setContacts,
    fetchMessagesById,
    setMessagesById,
    sendMessage,
}