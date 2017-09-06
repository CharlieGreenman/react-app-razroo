import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from "../../showHide.js";

import {Provider} from "react-redux";
import configureStore from "../../../../store/configureStore";
const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const showHide = renderer.create(
    <Provider store={store}>
      <Form />
    </Provider>
    , div
  );
  expect(showHide).toMatchSnapshot();
});

it('should render two buttons', () => {
  const wrapper = shallow(<Provider store={store}><Form /></Provider>);
  const button = <button></button>;
  expect(wrapper.contains(button)).toEqual(true);
});
