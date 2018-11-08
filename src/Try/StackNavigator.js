import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'

class BaseScreen extends React.Component {

  componentDidMount () {
    console.log(`挂载:`, this.constructor.name)
  }

  componentWillUnmount () {
    console.log(`卸载:`, this.constructor.name)
  }

  willFocus () {
    console.log('将得到焦点', this.constructor.name)
  }

  willBlur () {
    console.log('将失去焦点', this.constructor.name)
  }

  didFocus () {
    console.log('已得到焦点', this.constructor.name)
  }

  didBlur () {
    console.log('已失去焦点', this.constructor.name)
  }
}

export class Screen1 extends BaseScreen {

  render () {
    console.log(this.props.navigation)
    return (
      <View style={styles.rootView}>
        <Text style={styles.text}>screen1</Text>
        <Button title={'navigate to Screen2'}
                onPress={() => {this.props.navigation.navigate('Screen2', {name: this.props.name})}}/>
        <Button title={'push to Screen1'}
                onPress={() => {this.props.navigation.push('Screen1')}}/>
        <Button title={'back'} onPress={() => {this.props.navigation.goBack()}}/>
        <Button title={'CustomTitle'} onPress={() => {this.props.navigation.navigate('CustomTitle')}}/>
        <View>
          <Text>路由参数:{this.props.name}</Text>
          <TextInput value={undefined} style={{borderWidth: 2, borderColor: '#a88ef4'}}
                     onChangeText={val => {this.setState({name: val})}}/>
        </View>
      </View>
    )
  }
}

export class Screen2 extends BaseScreen {

  render () {
    return (
      <View style={styles.rootView}>
        <Text>{this.props.navigation.getParam('name')}</Text>
        <Text style={styles.text}>Screen2</Text>
        <Button title={'Screen3'} onPress={() => {this.props.navigation.navigate('Screen3')}}/>
      </View>
    )
  }
}

export class Screen3 extends BaseScreen {

  render () {
    return (
      <View style={styles.rootView}>
        <Text style={styles.text}>Screen3</Text>
        <Button title={'Screen1'} onPress={() => {this.props.navigation.navigate('Screen1')}}/>
      </View>
    )
  }
}

class Banner extends React.Component {
  constructor (props) {
    super(props)
    this.state = {img1: false}
    this.img1 = require('../alipay.png')
    this.img2 = require('../alipay_focus.png')
  }

  componentDidMount () {
    this.timer = setInterval(() => this.setState(
      state => {
        return {img1: !state.img1}
      }), 500)
    console.log('启动定时器', this.timer)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    console.log('销毁定时器', this.timer)
  }

  render () {
    return (<Image source={this.state.img1 ? this.img1 : this.img2} style={{width: 50, height: 50}}/>)
  }
}

export class CustomTitle extends BaseScreen {
  static navigationOptions = {
    headerTitle: (
      <View style={{flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center'}}>
        <Text>😂</Text>
        <Banner/>
        <Text>😂</Text>
      </View>)
  }

  render () {
    return (
      <View style={styles.rootView}>
        <Text style={styles.text}>自定义题目</Text>
      </View>)
  }
}

const styles = StyleSheet.create({
  rootView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 40, color: '#8678ff', fontWeight: 'bold'}
})
