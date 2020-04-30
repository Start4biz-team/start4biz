import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booleanActions from './../store/actions/booleanActions';
import { QuestionForm } from '../components/QuestionForm/QuestionForm';

const mapStateToProps = (state) => { 
   return {
      boolean: state.booleanReducer
   };
};

const mapDispatchToProps = (dispatch) => {
   const { AddFalse } = bindActionCreators(booleanActions, dispatch);
   return {
      AddFalse,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);