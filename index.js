import { AppRegistry } from 'react-native'
import app from './app.json'
import React from 'react'
import HomeNavigator from '@/views/homeNavigator'

AppRegistry.registerComponent(app.name, () => HomeNavigator)
