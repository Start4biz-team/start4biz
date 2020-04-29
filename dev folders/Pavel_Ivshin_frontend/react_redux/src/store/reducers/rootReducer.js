import {combineReducers} from 'redux';
import {reducer as proposalFormReduxReducer} from 'redux-form';
import {proposalFormReducer} from './proposalFormReducer';
import {popupReducer} from './popupReducer';
import {partnersReducer} from './partnersReducer';

export const rootReducer = combineReducers({
    proposalForm: proposalFormReducer,
    form: proposalFormReduxReducer,
    popup: popupReducer,
    partners: partnersReducer,
})