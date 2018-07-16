/*
 * index.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */

import React from 'react'
import F8Colors from '../Color'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

/* constants ================================================================ */

const BUTTON_HEIGHT = 52,
  BUTTON_HEIGHT_SM = 32

/* <F8Button />
============================================================================= */

class F8Button extends React.Component {
  props: {
    theme:
      | "logoBlue"
      | "pink"
      | "blue"
      | "yellow"
      | "fb"
      | "white"
      | "bordered"
      | "bordered-pink"
      | "disabled",
    type: "default" | "round" | "small",
    opacity: number,
    icon?: number,
    caption?: string,
    style?: any,
    fontSize?: number,
    borderRadius?: number,
    onPress: () => mixed
  };

  static defaultProps = {
    opacity: 1,
    theme: 'logoBlue'
  };

  static height = BUTTON_HEIGHT;

  render() {
    const { icon, fontSize, opacity } = this.props
    const caption = this.props.caption && this.props.caption.toUpperCase()
    const { buttonTheme, iconTheme, captionTheme } = this.getTheme()
    const { containerType, buttonType, iconType, captionType } = this.getType()

    let iconImage
    if (icon) {
      iconImage = (
        <Image source={icon} style={[styles.icon, iconTheme, iconType]} />
      )
    }

    let fontSizeOverride
    if (fontSize) {
      fontSizeOverride = { fontSize }
    }

    const content = (
      <View style={[styles.button, buttonTheme, buttonType, { opacity }]}>
        {iconImage}
        <Text
          style={[styles.caption, captionTheme, captionType, fontSizeOverride]}
        >
          {caption}
        </Text>
      </View>
    )

    if (this.props.onPress) {
      return (
        <TouchableOpacity
          accessibilityTraits="button"
          onPress={this.props.onPress}
          activeOpacity={0.5}
          style={[styles.container, containerType, this.props.style]}
        >
          {content}
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={[styles.container, containerType, this.props.style]}>
          {content}
        </View>
      )
    }
  }

  getTheme() {
    const { theme } = this.props
    let buttonTheme, iconTheme, captionTheme
    if (theme === 'yellow') {
      buttonTheme = { backgroundColor: F8Colors.yellow }
      iconTheme = { tintColor: F8Colors.pink }
      captionTheme = { color: F8Colors.pink }
    } else if (theme === 'blue') {
      buttonTheme = { backgroundColor: F8Colors.blue }
      iconTheme = { tintColor: F8Colors.white }
      captionTheme = { color: F8Colors.white }
    } else if (theme === 'fb') {
      buttonTheme = { backgroundColor: F8Colors.facebookBlue }
      iconTheme = { tintColor: F8Colors.white }
      captionTheme = { color: F8Colors.white }
    } else if (theme === 'white') {
      buttonTheme = { backgroundColor: F8Colors.white }
      iconTheme = { tintColor: F8Colors.pink }
      captionTheme = { color: F8Colors.pink }
    } else if (theme === 'bordered') {
      buttonTheme = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: F8Colors.tangaroa
      }
      iconTheme = { tintColor: F8Colors.tangaroa }
      captionTheme = { color: F8Colors.tangaroa }
    } else if (theme === 'bordered-pink') {
      buttonTheme = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: F8Colors.pink
      }
      iconTheme = { tintColor: F8Colors.pink }
      captionTheme = { color: F8Colors.pink }
    } else if (theme === 'maps') {
      buttonTheme = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: F8Colors.purple
      }
      iconTheme = { tintColor: F8Colors.tangaroa }
      captionTheme = { color: F8Colors.tangaroa }
    } else if (theme === 'mapsInactive') {
      buttonTheme = {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'transparent'
      }
      iconTheme = { tintColor: F8Colors.tangaroa }
      captionTheme = { color: F8Colors.tangaroa }
    } else if (theme === 'disabled') {
      buttonTheme = { backgroundColor: F8Colors.logoBlueDisabled }
      iconTheme = { tintColor: F8Colors.white, opacity: 0.5 }
      captionTheme = { color: F8Colors.white, opacity: 0.5 }
    } else if (theme === 'transparent') {
      buttonTheme = { backgroundColor: 'transparent' }
      iconTheme = { tintColor: F8Colors.tangaroa }
      captionTheme = { color: F8Colors.tangaroa }
    } else {
      // logoBlue/white is default
      buttonTheme = { backgroundColor: F8Colors.logoBlue }
      iconTheme = { tintColor: 'white' }
      captionTheme = { color: 'white' }
    }

    return { buttonTheme, iconTheme, captionTheme }
  }

  getType() {
    const { type } = this.props
    let containerType, buttonType, iconType, captionType

    if (type === 'round') {
      buttonType = { width: BUTTON_HEIGHT, borderRadius: BUTTON_HEIGHT / 2, paddingHorizontal: 0 }
      iconType = { marginRight: 0 }
      captionType = { fontSize: 13 }
    } else if (type === 'small') {
      containerType = { height: BUTTON_HEIGHT_SM }
      buttonType = { paddingHorizontal: 15 }
      iconType = { marginRight: 0 }
      captionType = { fontSize: 13 }
    } else {
      // defaults
      buttonType = { borderRadius: 5, paddingHorizontal: 0 }
      iconType = { marginRight: 0 }
      captionType = { fontSize: 13, fontWeight: 'bold' }
    }

    return { containerType, buttonType, iconType, captionType }
  }
}

/* StyleSheet
============================================================================= */

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    borderRadius: BUTTON_HEIGHT / 2
  },
  buttonRound: {
    width: BUTTON_HEIGHT,
    paddingHorizontal: 0
  },
  icon: {
    marginRight: 12
  },
  caption: {
    // fontFamily: F8Fonts.button,
    fontSize: 15,
    textAlign: 'center'
  }
})

export default F8Button
