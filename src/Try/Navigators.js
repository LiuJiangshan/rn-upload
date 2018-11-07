import { createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from 'react-navigation'
import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

class BaseScreen extends React.Component {
  static navigationOptions = {
    // 底部tab导航配置
    tabBarIcon: ({focused, horizontal, tintColor}) =>
      (<Image source={focused ? require('../alipay_focus.png') : require('../alipay.png')}
              style={{width: 25, height: 25}}/>),
    tabBarOptions: {
      activeTintColor: '#f95a6a',
      inactiveTintColor: 'gray',
    },
    drawerIcon: ({focused}) =>
      (<Image source={focused ? require('../alipay_focus.png') : require('../alipay.png')}
              style={{width: 25, height: 25}}/>)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: '#ffa7ae', fontWeight: 'bold'}}>{this.constructor.name}</Text>
        {
          Object.keys(screens).map((it, key) =>
            (<Button key={key} title={it} onPress={() => {this.props.navigation.navigate(it)}}/>))
        }
        {
          this.props.navigation.toggleDrawer
          && (<Button title={'ToggleDrawer'} onPress={() => {this.props.navigation.toggleDrawer()}}/>)
        }
      </View>
    )
  }
}

class Screen1 extends BaseScreen {
}

class Screen2 extends BaseScreen {
}

class Screen3 extends BaseScreen {
}

class Screen4 extends BaseScreen {
}

const screens = {Screen1, Screen2, Screen3, Screen4}
export const BottomTabNavigator = createBottomTabNavigator(screens)
export const DrawerNavigator = createDrawerNavigator(screens)
export const SwitchNavigator = createSwitchNavigator(screens)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
