/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import PickImage from './src/try/PickImage'
import StackNavigator from './src/try/StackNavigator'
import { BottomTabNavigator, DrawerNavigator, SwitchNavigator } from './src/try/Navigators'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export default class App extends Component {
  render () {
    const pickImg = (<PickImage/>)
    const stackNavigator = (<StackNavigator/>)
    const bottomTabNavigator = (<BottomTabNavigator/>)
    const drawerNavigator = (<DrawerNavigator/>)
    const switchNavigator = (<SwitchNavigator/>)
    return (<View style={styles.container}>{bottomTabNavigator}</View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
