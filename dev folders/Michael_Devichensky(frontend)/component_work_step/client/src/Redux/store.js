import { createStore, combineReducers } from 'redux';
import { BooleanReduser } from './Redusers/BooleanReduser';

const reduser = combineReducers({
   BooleanReduser,
});

export const store = createStore(reduser);