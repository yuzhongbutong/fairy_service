import {connect} from 'react-redux';
import {updateRootState} from './../actions';
import ChatMessage from './../components/chat/ChatMessage';

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  showLoading: (isShow) => {
    dispatch(updateRootState({isLoading: isShow}));
  }
});

const ChatMessagePacker = connect(mapStateToProps, mapDispatchToProps)(ChatMessage);

export default ChatMessagePacker;
