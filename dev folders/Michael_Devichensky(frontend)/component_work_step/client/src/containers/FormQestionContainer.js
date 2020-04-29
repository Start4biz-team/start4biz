import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooleanActions from '../Redux/Actions/BooleanActions';
import { FormQuestion } from '../components/form-question/FormQuestionComponent';

const mapStateToProps = (state) => { 
   return {
      boolean: state.BooleanReduser
   };
};
const mapDispatchToProps = (dispatch) => {
   const { AddFalse } = bindActionCreators(BooleanActions, dispatch);
   return {
      AddFalse,
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormQuestion);