import React from 'react'
import { RefreshControl, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import { List, ListItem } from 'react-native-elements'
import { Toast } from 'antd-mobile-rn'

export class NetWorkOptionList extends React.Component {
  static navigationOptions = {headerTitle: '网络相关操作'}

  render () {
    const data = [{
      title: 'Bilibili',
      onPress: () => this.props.navigation.navigate(Bilibili.name)
    }]
    return (<ScrollView>
      <List>
        {
          data.map((item, index) => (<ListItem key={index} {...item}/>))
        }
      </List>
    </ScrollView>)
  }
}

export class Bilibili extends React.Component {
  static navigationOptions = {headerTitle: 'Bilibili'}

  constructor (props) {
    super(props)
    this.state = {data: [], refreshing: false}
  }

  componentDidMount () {
    this.loadData()
  }

  loadData () {
    this.setState({refreshing: true})
    const data = []
    axios({
      url: 'https://api.live.bilibili.com/area/liveList',
      params: {
        area: 'all', page: 1, order: 'live_time'
      }
    }).then(response => data.push(...response.data.data))
      .catch(error => Toast.fail(error, Toast.SHORT))
      .then(() => this.setState({
        data: data,
        refreshing: false
      }))
  }

  render () {
    return (
      <ScrollView
        refreshControl={(<RefreshControl refreshing={this.state.refreshing} onRefresh={() => this.loadData()}/>)}>
        <List>
          {this.state.data && this.state.data.map((item, index) => (
            <ListItem avatar={item.pic} key={index} title={item.title}/>))}
        </List>
      </ScrollView>)
  }
}

export default class NetWorkScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '网络操作',
    tabBarIcon: ({tintColor}) => (<Icon name={'network'} size={30} color={tintColor}/>)
  }

  render () {
    const Screen = createStackNavigator({NetWorkOptionList, Bilibili})
    return (<Screen/>)
  }
}
