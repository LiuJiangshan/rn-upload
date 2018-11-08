import React from 'react'
import { ActivityIndicator, FlatList, Image, RefreshControl, ScrollView, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import axios from 'axios'
import { List, ListItem } from 'react-native-elements'
import { Card, Toast } from 'antd-mobile-rn'

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
    this.state = {data: [], refreshing: false, page: 1}
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
        area: 'all', page: this.state.page, order: 'live_time'
      }
    }).then(response => data.push(...response.data.data))
      .catch(error => Toast.fail(error, Toast.SHORT))
      .then(() => {
        this.setState(
          state => {
            data.forEach((item, index) => { item.key = index + state.data.length})
            return {data: [...state.data, ...data], refreshing: false}
          }
        )
      })
  }

  onEndReached () {
    this.setState(state => { return {page: state.page + 1}})
    this.loadData()
  }

  renderItem ({item, index}) {
    return (
      <Card key={index} style={{flex: 1, margin: 5}}>
        <Card.Header title={<Text>{item.title}</Text>}/>
        <Card.Body>
          <Image source={{uri: item.system_cover || item.cover}} style={{minHeight: 80}}/>
        </Card.Body>
        <Card.Footer content={
          <View style={{fex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Image resizeMode={'cover'} source={{uri: item.face}} style={{width: 30, height: 30, borderRadius: 15}}/>
            <Text numberOfLines={1} style={{flex: 1, marginLeft: 5}}>{item.uname}</Text>
          </View>
        }/>
      </Card>)
  }

  renderEmpty () {
    return (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center', height: 100}}>
      <Text>没有数据</Text>
    </View>)
  }

  renderaFooter () {
    return (this.state.data.length !== 0) ?
      (<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{`第${this.state.page}页`}</Text>
        <ActivityIndicator/>
      </View>) : (<View></View>)
  }

  render () {
    return (
      <FlatList refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={() => {
        this.setState({page: 0})
        this.loadData()
      }}/>}
                numColumns={2} data={this.state.data}
                renderItem={this.renderItem.bind(this)}
                onEndReached={this.onEndReached.bind(this)}
                ListEmptyComponent={this.renderEmpty.bind(this)}
                ListFooterComponent={this.renderaFooter.bind(this)}/>)
  }
}

const NetWorkScreen = createStackNavigator({NetWorkOptionList, Bilibili})
export default NetWorkScreen
