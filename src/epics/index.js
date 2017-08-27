import 'rxjs';
import { combineEpics } from 'redux-observable';
import { showHide } from './showHideEpic';

const rootEpic = combineEpics(
  showHide
);

export default rootEpic;
