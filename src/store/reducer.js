import types from './types';

export const initialState = () => ({
    auth: {
        isAuth: false,
        user: {},
    },
    contacts: {},
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
        default:
            return initialState();
    }
};

export default reducers;