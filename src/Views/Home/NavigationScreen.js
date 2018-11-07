import React from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { createStackNavigator } from 'react-navigation'
import StackNavigator from '@/Try/StackNavigator'
import { BottomTabNavigator, DrawerNavigator, SwitchNavigator } from '@/Try/Navigators'

export class NavigationTypeList extends React.Component {
  static navigationOptions = {headerTitle: '导航分类'}

  render () {
    const data = [
      {
        title: '堆栈导航',
        onPress: () => this.props.navigation.navigate(StackNavigation.name)
      },
      {
        title: '底部tab导航',
        onPress: () => this.props.navigation.navigate(BottomTabNavigation.name)
      },
      {
        title: '抽屉导航',
        onPress: () => this.props.navigation.navigate(DrawerNavigation.name)
      },
      {
        title: '开关导航',
        onPress: () => this.props.navigation.navigate(SwitchNavigation.name)
      }
    ]
    return (
      <ScrollView>
        <List>
          {data.map((item, index) => (
            <ListItem key={index} {...item}/>))}
        </List>
      </ScrollView>
    )
  }
}

export class StackNavigation extends React.Component {
  static navigationOptions = {
    headerTitle: '堆栈导航'
  }

  render () {
    return (<StackNavigator/>)
  }
}

export class BottomTabNavigation extends React.Component {
  static navigationOptions = {headerTitle: '底部Tab导航'}

  render () {
    return (<BottomTabNavigator/>)
  }
}

export class DrawerNavigation extends React.Component {
  static navigationOptions = {headerTitle: '抽屉导航'}

  render () {
    return (<DrawerNavigator/>)
  }
}

export class SwitchNavigation extends React.Component {
  static navigationOptions = {headerTitle: '开关导航'}

  render () {
    return (<SwitchNavigator/>)
  }
}

export default class NavigationScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '导航',
    tabBarIcon: ({tintColor}) => (<Icon name={'navicon'} size={30} color={tintColor}/>)
  }

  render () {
    const Screen = createStackNavigator({
      NavigationTypeList,
      StackNavigation,
      BottomTabNavigation,
      DrawerNavigation,
      SwitchNavigation
    })
    return (<Screen/>)
  }
}
