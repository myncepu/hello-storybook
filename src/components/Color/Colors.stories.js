/*
 * Colors.stores.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Colors from '../Color'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const {width} = Dimensions.get('window')

const ColorsView = (props) => (
  <View style={[styles.color, {backgroundColor: props.color}]}>
    <Text style={[styles.text, {color: props.labelColor}]}>{props.colorName}</Text>
  </View>
)


storiesOf('Colors', module)
  .add('Colors', () => (
    <View style={styles.container}>
      <ColorsView
        color={Colors.headerBackground}
        colorName='Header color'
        labelColor={Colors.headerTextColor}
      />
      <ColorsView
        color={Colors.primaryButtonBackground}
        colorName='primary button color'
        labelColor={Colors.headerTextColor}
      />
      <ColorsView
        color={Colors.primaryDisabledButtonBackground}
        colorName='disable primary button color'
        labelColor={Colors.headerTextColor}
      />
    </View>
  ))

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  color: {
    width: width / 3 - 10,
    maxWidth: 100,
    height: width / 3 - 10,
    maxHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  }
})
