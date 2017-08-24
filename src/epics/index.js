import { combineEpics } from 'redux-observable';
import { showHide } from './showHideEpic';

export const rootEpic = combineEpics(
  showHide
);
