import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import TestComponent from '../src/index';
import PanelFixedHeight from './PanelFixedHeight';
import CenteredMessage from './../src/CenteredMessage';

storiesOf('TestComponent', module)
  .add('normal', () => (
    <PanelFixedHeight>
      <TestComponent/>
    </PanelFixedHeight>
  ))
  .add('react-centered-message', () => (
    <PanelFixedHeight>
      <CenteredMessage>
        <div>Hello World1</div>
      </CenteredMessage>
    </PanelFixedHeight>
  ));
