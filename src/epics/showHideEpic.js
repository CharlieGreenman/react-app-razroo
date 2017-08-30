import * as ActionTypes from '../constants/ActionTypes';
import { showBlock, hideBlock } from '../actions/showHide';
import { Observable } from 'rxjs/Observable';

export function showHide(action$) {
  return action$.ofType(ActionTypes.SHOW)
    .switchMap(action => {
      return Observable
        .timer(1000, 1000)
        .mergeMap(tick => {
          console.log('tick: ' + tick);
          return Observable.of(tick);
        })
        .map(seconds => {
          console.log('seconds: ' + seconds);
          return action;
        });
    });
};
