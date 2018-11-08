import React from 'react'
import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'
import { BottomTabNavigator, DrawerNavigator, SwitchNavigator } from '@/Try/Navigators'

export default class NavigationTypeList extends React.Component {

  render () {
    const data = [
      {
        title: '堆栈导航',
        onPress: () => this.props.navigation.navigate('StackNavigation')
      },
      {
        title: '底部tab导航',
        onPress: () => this.props.navigation.navigate('BottomTabNavigator')
      },
      {
        title: '抽屉导航',
        onPress: () => this.props.navigation.navigate('DrawerNavigator')
      },
      {
        title: '开关导航',
        onPress: () => this.props.navigation.navigate('SwitchNavigator')
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
