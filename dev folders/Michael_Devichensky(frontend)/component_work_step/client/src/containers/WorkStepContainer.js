import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BooleanActions from '../Redux/Actions/BooleanActions';
import { WorkStep } from '../components/section-step-work/WorkStepComponent';

const mapStateToProps = (state) => {
   return {
      boolean: state.BooleanReduser
   };
};
const mapDispatchToProps = (dispatch) => {
   const { AddTrue } = bindActionCreators(BooleanActions, dispatch);
   return {
      AddTrue,
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(WorkStep);

