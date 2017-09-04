import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from "../../showHide.js";

import {Provider} from "react-redux";
import configureStore from "../../../../store/configureStore";
const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  shallow(
    <Provider store={store}>
      <Form />
    </Provider>
    , div
  );
});
