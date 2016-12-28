import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Main from 'components/Main';

import { genericAction1, genericAction2 } from 'actions/GenericActions';


function mapStateToProps(state) {
  return {
    genericProp1: state.genericReducer.genericStatePiece1,
    genericProp2: state.genericReducer.genericStatePiece2
  }
};

function mapDispatchToProps(dispatch: Dispatch): Object {
  return {
    genericAction1: bindActionCreators(genericAction1, dispatch),
    genericAction2: bindActionCreators(genericAction2, dispatch)
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
