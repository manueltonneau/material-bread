import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';

import { BreadProvider, Appbar } from '../../src/index';

storiesOf('Appbar', module)
  .addDecorator(story => <View style={{ padding: 16 }}>{story()}</View>)
  .add('Appbar', () => (
    <BreadProvider value={{}}>
      <View style={{ marginBottom: 60 }}>
        <Text style={{ fontSize: 28, textAlign: 'center' }}>Appbar</Text>
      </View>
      <Appbar size={64} title={'Page Title'} />
    </BreadProvider>
  ));
