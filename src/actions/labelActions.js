import { CHANGE_LABEL } from './ActionConstants';

export function changeLabel(payload) {
    return { type: CHANGE_LABEL, payload }
};