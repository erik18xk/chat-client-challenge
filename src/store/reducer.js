import types from './types';
import {useDispatch} from "react-redux";

export const initialState = () => ({
    auth: {
        isAuth: false,
        user: {},
    },
    contacts: {},
    messages: {},
});

const reducers = (state = initialState(), action) => {
    const data = action && action.payload;
    switch (action.type) {
        case types.INITIALIZE:
            return {
                ...state,
            }
        case types.SET_USER:
            return  {
                ...state,
                auth: {
                    isAuth: true,
                    ...data.detail,
                }
            }
        case types.SET_CONTACTS:
            return {
                ...state,
                ...data.detail,
            }
        case types.FETCH_MESSAGES_BY_ID:
            return {
                ...state,
            }
        case types.SET_MESSAGES_BY_ID:
            return {
                ...state,
                ...data.detail.messages
            }
        case types.SEND_MESSAGE:
            return {
                ...state, // Change here
            }
        default:
            return initialState();
    }
};

export default reducers;