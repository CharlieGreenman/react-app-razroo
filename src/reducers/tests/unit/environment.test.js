import * as types from "../../../constants/ActionTypes";
import environment from "../../environment";

it('should show the initialState if action type is undefined', function () {
  expect(environment(undefined, {})).toEqual({show: false});
});
