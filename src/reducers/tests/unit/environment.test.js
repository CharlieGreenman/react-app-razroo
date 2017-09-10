import * as types from "../../../constants/ActionTypes";
import environment from "../../environment";

it('should show the initialState if action type is undefined', function () {
  expect(environment(undefined, {})).toEqual({show: false});
});

it('should set show to true if action type is show', function () {
  expect(environment(undefined, {
      type: types.SHOW,
      show: true
  })).toEqual({show: true});
});
