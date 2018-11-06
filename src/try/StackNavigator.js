import React from 'react'
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

class BaseScreen extends React.Component {

  constructor (props) {
    super(props)
    this.state = {name: undefined}
  }

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

class Screen1 extends BaseScreen {

  render () {
    return (
      <View style={styles.rootView}>
        <Text style={styles.text}>screen1</Text>
        <Button title={'navigate to Screen2'}
                onPress={() => {this.props.navigation.navigate('Screen2', {name: this.state.name})}}/>
        <Button title={'push to Screen1'}
                onPress={() => {this.props.navigation.push('Screen1')}}/>
        <Button title={'back'} onPress={() => {this.props.navigation.goBack()}}/>
        <Button title={'CustomTitle'} onPress={() => {this.props.navigation.navigate('CustomTitle')}}/>
        <View>
          <Text>路由参数:{this.state.name}</Text>
          <TextInput value={undefined} style={{borderWidth: 2, borderColor: '#a88ef4'}}
                     onChangeText={val => {this.setState({name: val})}}/>
        </View>
      </View>
    )
  }
}

class Screen2 extends BaseScreen {

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

class Screen3 extends BaseScreen {

  render () {
    return (
      <View style={styles.rootView}>
        <Text style={styles.text}>Screen3</Text>
        <Button title={'Screen1'} onPress={() => {this.props.navigation.navigate('Screen1')}}/>
      </View>
    )
  }
}

class CustomTitle extends BaseScreen {
  static navigationOptions = {
    headerTitle: (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red'}}>
        <Image source={require('../alipay.png')} style={{width: 50, height: 50}}/>
        <Text>😂</Text>
      </View>)
  }

  render () {
    return (
      <View>
        <Text>自定义题目</Text>
      </View>)
  }
}

export default createStackNavigator(
  {Screen1: Screen1, Screen2: Screen2, Screen3: Screen3, CustomTitle: CustomTitle},
  {
    initialRouteName: 'Screen1',
    navigationOptions: ({navigation}) => {
      return {
        title: navigation.getParam('title', 'title param is null'),
        headerStyle: {
          backgroundColor: '#7a8ab2',
        },
        headerTintColor: '#e1ff7f',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontStyle: 'italic'
        }
      }
    }
  }
)
const styles = StyleSheet.create({
  rootView: {flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 2},
  text: {fontSize: 40, color: '#8678ff', fontWeight: 'bold'}
})
