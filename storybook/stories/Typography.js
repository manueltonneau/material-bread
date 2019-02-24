import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from 'react-native';

import {
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Overline,
} from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Typography', module).add('Components', () => (
  <Container>
    <Header title={'Typography'} />
    <View style={{ marginTop: 50 }}>
      <Heading type={1}>h1</Heading>
      <Heading type={2}>h2</Heading>
      <Heading type={3}>h3</Heading>
      <Heading type={4}>h4</Heading>
      <Heading type={5}>h5</Heading>
      <Heading type={6}>h6</Heading>
      <Subtitle type={1}>Subtitle One</Subtitle>
      <Subtitle type={2}>Subtitle Two</Subtitle>
      <BodyText type={1}>Body 1</BodyText>
      <BodyText type={2}>Body 2</BodyText>
      <Caption>Caption</Caption>
      <Overline>Overline</Overline>
    </View>
  </Container>
));
