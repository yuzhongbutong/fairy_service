import {Constant} from './../common/Constant';

const reducerRootState = (state = {}, action) => {
  switch (action.type) {
  case Constant.actionKeys.updateRoot:
    const store = {
      ...state,
      ...action.rootState
    };
    return store;
  case Constant.actionKeys.removeRoot:
    const keys = action.keys;
    if (typeof state.rootState !== 'undefined' && typeof keys === 'array') {
      keys.map(function(key) {
        delete state.rootState[key];
      });
    }
    return state;
  default:
    return state;
  }
};

export default reducerRootState;