import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {updateRootState} from './../actions';
import App from './../App';


const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showLoading: (isShow) => {
    dispatch(updateRootState({isLoading: isShow}));
  }
});

const AppPacker = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppPacker;
