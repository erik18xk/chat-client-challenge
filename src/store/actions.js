import { createAction } from 'redux-actions';
import types from './types';

const _initialize = createAction(types.INITIALIZE);
const initialize = () => _initialize({});


export default {
    initialize,
}