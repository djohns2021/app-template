import { combineReducers } from 'redux';

import genericReducer from 'reducers/GenericReducer';

const reducers = {
  genericReducer
};

const rootReducer = combineReducers({
  ...reducers
});

export default rootReducer;
