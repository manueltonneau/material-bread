import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { storiesOf } from '../helpers/storiesOf';

import Container from '../components/Container';
import { Heading, BodyText, Button, Anchor } from '../../src';
import { linkTo } from '@storybook/addon-links';

const styles = StyleSheet.create({
  top: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(10, 10, 10, 0.67)',
    fontWeight: '400',
    marginTop: 6,
  },
  bodyText: {
    fontSize: 14,
    lineHeight: 22,
  },
  initialText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    marginHorizontal: 'auto',
    maxWidth: 780,
  },
  textRow: {
    marginTop: 20,
    flexWrap: 'wrap',
    maxWidth: 780,
  },
  buttonRow: {
    marginTop: 20,
    flexDirection: 'row',
  },
  secondButton: { marginLeft: 20 },
  logo: {
    width: 300.502,
    height: 250.398,
    resizeMode: 'cover',
  },
});

storiesOf('Docs|Start Here', module)
  .add('Home', () => (
    <Container>
      <View style={styles.top}>
        <Image
          source={{ uri: '../assets/logo-shadow.svg' }}
          style={styles.logo}
        />
        <Heading style={styles.header}>Material Bread</Heading>
        <BodyText style={styles.subtitle}>
          One Component Library, Six Platforms
        </BodyText>
      </View>

      <View style={styles.initialText}>
        <BodyText style={styles.bodyText}>
          This is the Storybook environment for Material Bread which is a highly
          customizable cross-platform React Native Material Library. Each
          component storybook story contains many demos, visit the docs to see
          the full component API.
        </BodyText>
        <View style={styles.buttonRow}>
          <Anchor url={'http://material-bread.org/'} target={'_parent'}>
            <Button
              text={'Documentation'}
              type={'outlined'}
              textColor={'#d0ab82'}
            />
          </Anchor>

          <Anchor
            url={'https://github.com/codypearce/material-bread'}
            target={'_parent'}>
            <Button
              text={'Github'}
              type={'outlined'}
              textColor={'#666'}
              style={styles.secondButton}
            />
          </Anchor>
        </View>
        <View style={styles.textRow}>
          <BodyText style={styles.bodyText}>
            Storybook has great addons, checkout the storybook page to see all
            the addons you can use to test and checkout components.
          </BodyText>
        </View>
        <View style={styles.buttonRow}>
          <Button
            onClick={linkTo('Docs|Start Here', 'Storybook')}
            text={'Storybook Addons'}
            type={'outlined'}
            textColor={'rgb(233, 30, 99)'}
          />
        </View>
      </View>
    </Container>
  ))
  .add('Storybook', () => (
    <Container>
      <View style={styles.top}>
        <Heading style={styles.header}>Storybook Addons</Heading>
      </View>
    </Container>
  ));
