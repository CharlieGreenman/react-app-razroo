import * as ActionTypes from '../constants/ActionTypes';
import { showBlock, hideBlock } from '../actions/showHide';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

export function showHide(action$) {
  return action$.ofType(ActionTypes.SHOW)
    .switchMap(action => {
      return Observable
        .timer(0, 1000)
        .mergeMap(tick => {
          console.log('tick: ' + tick);
          return Observable.of(tick);
        });
    });
};
