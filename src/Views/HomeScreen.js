import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import NavigationScreen from '@/Views/Home/NavigationScreen'
import NetWorkScreen from '@/Views/Home/NetWorkScreen'
import ThirdLibraryScreen from '@/Views/Home/ThirdLibraryScreen'

export default createBottomTabNavigator(
  {
    NavigationScreen, NetWorkScreen, ThirdLibraryScreen
  })
