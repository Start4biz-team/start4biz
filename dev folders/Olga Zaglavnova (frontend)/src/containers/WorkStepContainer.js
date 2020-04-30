import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booleanActions from './../store/actions/booleanActions';
import { WorkStep } from '../components/WorkStep/WorkStep';

const mapStateToProps = (state) => {
   return {
      boolean: state.booleanReduser
   }
};

const mapDispatchToProps = dispatch => {
   const { AddTrue } = bindActionCreators(booleanActions, dispatch);
   return {
      AddTrue
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkStep);