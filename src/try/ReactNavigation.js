import { createStackNavigator } from 'react-navigation'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

class BaseScreen extends React.Component {
  componentDidMount () {
    console.log(`挂载:`, typeof this)
  }

  componentWillUnmount () {
    console.log(`卸载:`, typeof this)
  }
}

class Screen1 extends BaseScreen {
  render () {
    return (
      <View style={styles.rootView}>
        <Text style={styles.text}>screen1</Text>
        <Button title={'navigate to Screen2'}
                onPress={() => {this.props.navigation.navigate('Screen2')}}/>
        <Button title={'push to Screen1'}
                onPress={() => {this.props.navigation.push('Screen1')}}/>
        <Button title={'back'} onPress={() => {this.props.navigation.goBack()}}/>
      </View>
    )
  }
}

class Screen2 extends BaseScreen {
  render () {
    return (
      <View style={styles.rootView}>
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

export default createStackNavigator(
  {Screen1: Screen1, Screen2: Screen2, Screen3: Screen3},
  {initialRouteName: 'Screen1'}
)
const styles = StyleSheet.create({
  rootView: {flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 2},
  text: {fontSize: 40, color: '#8678ff', fontWeight: 'bold'}
})
