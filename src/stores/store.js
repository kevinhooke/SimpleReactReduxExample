import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
    labelValue : ''
}

// reducer for changing state for the label value
function labelReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_LABEL':
            return Object.assign( {},
                {
                    labelValue : action.payload
                });
        default:
            return state;
    }
}

let store = createStore(labelReducer, devToolsEnhancer());

export default store;
