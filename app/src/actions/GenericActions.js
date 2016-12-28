import { createAction } from 'redux-actions';
import { genericActions } from 'consts/ActionConstants';

export const genericAction1 = createAction(genericActions.GEN_ACTION1);
export const genericAction2 = createAction(genericActions.GEN_ACTION2);
