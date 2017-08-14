import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import Form from "../components/showHide/showHide.js";

import {Provider} from "react-redux";
import configureStore from "../store/configureStore";

const store = configureStore();

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('Show Hide', module)
  .addDecorator((getStory) => (<Provider store={store}>
                                          { getStory() }
                                 </Provider>
                                   ))
  .add('React Component', () => <Form />)
