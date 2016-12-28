import { handleActions } from 'redux-actions';
import { genericActions } from 'consts/ActionConstants';

export const genericStatePiece = {
  genericStatePiece1: 1,
  genericStatePiece2: 'one'
}

// Reducers
let reducers = {};

reducers[genericActions.GEN_ACTION1] = (state, action) => {
  return { ...state,
    genericStatePiece1: 2
  };
};

reducers[genericActions.GEN_ACTION2] = (state, action) => {
  return { ...state,
    genericStatePiece2: 'two'
  };
};

export default handleActions(reducers, genericStatePiece);
