/*
 * Button.stories.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import { View, Alert } from 'react-native'

import { storiesOf } from '@storybook/react-native'
// import { action } from '@storybook/addon-actions'
import F8Button from '../Button'

storiesOf('CustomButton', module)
  .add('Buttons', () => (
    <ButtonStory />
  ))
/* Playground Cards
============================================================================= */

class ButtonStory extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-around', paddingHorizontal: 20 }}>
        <F8Button
          caption="default (logoBlue)"
          onPress={() => Alert.alert('default (pink) pressed!')}
        />
        <F8Button
          theme="disabled"
          caption="default (pink)"
          onPress={() => Alert.alert('default (pink) pressed!')}
        />
        <F8Button
          theme="yellow"
          caption="yellow (icon)"
          icon={require('./img/buttons/logo-fb.png')}
          onPress={() => Alert.alert('yellow (icon) pressed!')}
        />
        <F8Button
          theme="fb"
          caption="fb"
          icon={require('./img/buttons/logo-fb.png')}
          onPress={() => Alert.alert('fb pressed!')}
        />
        <F8Button
          theme="white"
          caption="white"
          onPress={() => Alert.alert('white pressed!')}
        />
        <F8Button
          theme="bordered"
          caption="bordered"
          onPress={() => Alert.alert('bordered pressed!')}
        />
        <F8Button
          theme="bordered-pink"
          caption="bordered-pink"
          onPress={() => Alert.alert('bordered-pink pressed!')}
        />
        <F8Button
          type="round"
          caption="My F8"
          onPress={() => Alert.alert('round (caption) pressed!')}
        />
        <F8Button
          theme="white"
          type="round"
          icon={require('./img/buttons/icon-x.png')}
          onPress={() => Alert.alert('round (white) pressed!')}
        />
        <F8Button
          theme="blue"
          type="round"
          icon={require('./img/buttons/icon-check.png')}
          onPress={() => Alert.alert('round (blue) pressed!')}
        />
        <F8Button
          theme="bordered"
          caption="Fixed 250 width"
          style={{ width: 250 }}
          onPress={() => Alert.alert('round (blue) pressed!')}
        />
        <F8Button
          theme="maps"
          type="small"
          caption="Small"
          onPress={() => Alert.alert('small (maps) pressed!')}
        />
      </View>
    )

  }
}
