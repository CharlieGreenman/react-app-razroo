import {showBlock, hideBlock} from '../../showHide.js';
import * as types from "../../../constants/ActionTypes";

it('should create an action to show the div block', function() {
  const expectedAction = {
    type: types.SHOW,
    show: true
  }
  expect(showBlock()).toEqual(expectedAction)
});

it('should create an action to hide the div block', function() {
  const expectedAction = {
    type: types.HIDE,
    show: false
  }
  expect(hideBlock()).toEqual(expectedAction)
});
