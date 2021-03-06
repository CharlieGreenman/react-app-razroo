import * as ActionTypes from '../constants/ActionTypes';
import { hideBlock } from '../actions/showHide';
import { Observable } from 'rxjs/Observable';

export function showHide(action$) {

  return action$.ofType(ActionTypes.SHOW).switchMap(action => {
    return Observable
      .timer(1000)
      .map(seconds => {
        return hideBlock();
      })
  });
};
