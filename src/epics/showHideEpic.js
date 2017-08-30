import * as ActionTypes from '../constants/ActionTypes';
import { showBlock, hideBlock } from '../actions/showHide';

export function showHide(action$) {
  return action$.ofType(ActionTypes.SHOW)
    .switchMap(action => {
      console.log('action: ' + action);
      showBlock(action$)
    });
};
