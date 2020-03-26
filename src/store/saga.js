import {  delay, takeLatest, all, call, put, select } from 'redux-saga/effects';
import types from './types';
import actions from "./actions";
import moment from "moment";
// For use real api call change process.env.NODE_ENV === 'development' into process.env.NODE_ENV !== 'development'
const userApi = process.env.NODE_ENV === 'development' ? require('./api').default : require('./api.mock.js').default; // Add mock data

function* initSaga() {
    yield window.console.log('This saga should look for sessionId and make login if exists')
    // IF user exist means the Cookie is stored and I can proceed with the Dashboard, setting user Auth
    const user = yield call(userApi.checkAuth);
    if (user) {
        yield put(actions.setUser({ user }));
        yield call(watchGetContacts);
    }
}

function* watchGetContacts() {
    const contacts = yield call(userApi.getContacts);
    if (contacts) {
        yield put(actions.setContacts({contacts}));
        console.log('Contacts are stored inside the redux store');
    }
    console.log(contacts);
}

function* watchFetchMessagesById() {
    yield takeLatest(types.FETCH_MESSAGES_BY_ID, function*( { payload }) {
        const messages = yield call(userApi.fetchMessages, payload);
        if (messages) {
            yield put(actions.setMessagesById({ messages }));
        }
    })
}

function* watchSendMessage() {
    yield takeLatest(types.SEND_MESSAGE, function* ({ payload }) {
        const { message } = payload;
        const { id } = payload;
        console.log(`Id is ${id}`);
        const messageDTO = {
            contactId: id,
            message: message,
            sentDate: moment().format(),
        };
        const sendMessage = yield call(userApi.sendDtoMessage, messageDTO);

        // Fetch all the messages with the last message
        if (sendMessage) {
            const messages = yield call(userApi.fetchMessages, {id});
            yield put(actions.setMessagesById({ messages }));
            yield call(watchGetContacts);
        }

        // Update unread messages updating the contacts
    })
}

function* watchLogin() {
    yield takeLatest(types.DO_LOGIN, function*({ payload }) {
        const user = yield call(userApi.LoginUser, payload);
        console.log(user);
        if (user) {
            yield put(actions.setUser( { user }));
            yield call(watchGetContacts);
        }
    });
}


export default function* rootSaga() {
    yield all([
        initSaga(),
        watchLogin(),
        watchFetchMessagesById(),
        watchSendMessage(),
    ])
}