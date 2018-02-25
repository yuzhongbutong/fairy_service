import {Constant} from './../common/Constant';

export const updateRootState = (state) => {
  return {
    type: Constant.actionKeys.updateRoot,
    rootState: state
  };
};

export const removeRootState = (keys) => {
  return {
    type: Constant.actionKeys.updateRoot,
    keys: keys
  };
};