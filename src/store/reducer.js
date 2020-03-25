import types from './types';

export const initialState = () => ({
    user: {
        isAuth: false,
        detail: {},
    },
    history: {},
});

const reducers = (state = initialState(), action) => {
    switch (action.type) {
        case types.INITIALIZE:
            return {
                ...state,
            }
        case types.ANOTHER:
            return  {
                ...state,
            }
        default:
            return initialState();
    }
};

export default reducers;