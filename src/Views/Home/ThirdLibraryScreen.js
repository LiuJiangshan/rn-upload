import React from 'react'
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { List, ListItem } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import PickImage from '@/Try/PickImage'

export class ThirdLibraryOptionList extends React.Component {
  static navigationOptions = {headerTitle: '第三方库'}

  render () {
    const data = [
      {
        title: 'react-native-image-picker',
        onPress: () => this.props.navigation.navigate(PickImage.name)
      }]
    return (
      <ScrollView>
        <List>
          {data.map((item, index) => (<ListItem key={index} {...item}/>))}
        </List>
      </ScrollView>
    )
  }
}

export default class ThirdLibraryScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '第三方库',
    tabBarIcon: ({tintColor}) => (<Icon name={'library'} size={30} color={tintColor}/>)
  }

  render () {
    const Screen = createStackNavigator({ThirdLibraryOptionList, PickImage})
    return (<Screen/>)
  }
}
