/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import NavigationTypeList from '@/Views/Home/NavigationTypeList'
import { BottomTabNavigator, DrawerNavigator, SwitchNavigator } from '@/Try/Navigators'
import NetWorkScreen from '@/Views/Home/NetWorkScreen'
import ThirdLibraryScreen from '@/Views/Home/ThirdLibraryScreen'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { CustomTitle, Screen1, Screen2, Screen3 } from '@/Try/StackNavigator'

export default class App extends Component {
  render () {
    const HomeScreen = createBottomTabNavigator(
      {
        // 导航tab页
        NavigationScreen: {
          screen: createStackNavigator(
            {
              // 导航分类列表页面
              NavigationTypeList: {
                screen: NavigationTypeList,
                navigationOptions: {headerTitle: '导航分类'}
              },
              // 堆栈导航测试页面
              StackNavigation: {
                screen: createStackNavigator(
                  {
                    Screen1: {
                      screen: Screen1,
                      navigationOptions: {
                        headerTitle: 'Screen1'
                      }
                    },
                    Screen2: {
                      screen: Screen2,
                      navigationOptions: {
                        headerTitle: 'Screen2'
                      }
                    },
                    Screen3: {
                      screen: Screen3,
                      navigationOptions: {
                        headerTitle: 'Screen3'
                      }
                    },
                    CustomTitle
                  },
                  {
                    initialRouteName: 'Screen1'
                  }
                ),
                navigationOptions: {
                  headerTitle: '堆栈导航'
                }
              },
              // 底部tab导航测试页面
              BottomTabNavigator,
              // 抽屉导航测试页面
              DrawerNavigator,
              // 开关导航测试页面
              SwitchNavigator
            }),
          path: '/navigation-screen',
          navigationOptions: {
            tabBarLabel: '导航',
            tabBarIcon: ({tintColor}) => (<FeatherIcon name={'navigation'} size={30} color={tintColor}/>)
          }
        },
        NetWorkScreen: {
          screen: NetWorkScreen,
          navigationOptions: {
            tabBarLabel: '网络',
            tabBarIcon: ({tintColor}) => (<EntypoIcon name={'network'} size={30} color={tintColor}/>)
          }
        },
        ThirdLibraryScreen
      })
    return (<HomeScreen/>)
  }
}
