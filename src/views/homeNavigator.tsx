/**
 * 主页 bottomTab 导航
 * */
// @ts-ignore
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import React from "react";
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import NavigationScreen from './tabs/navigationScreen'
import NetworkScreen from './tabs/networkScreen'
import NativeModuleScreen from './tabs/nativeModuleScreen'

const iconProps = {size: 18}
const bottomTabNavigator = createBottomTabNavigator({
    navigationScreen: {
        screen: NavigationScreen,
        navigationOptions: {
            tabBarLabel: '导航框架',
            tabBarIcon: ({focused, horizontal, tintColor}) => (
                <FeatherIcon name='navigation' color={tintColor} {...iconProps}/>)
        }
    },
    networkScreen: {
        screen: NetworkScreen,
        navigationOptions: {
            tabBarLabel: '网络',
            tabBarIcon: ({focused, horizontal, tintColor}) => (
                <EntypoIcon name='network' color={tintColor} {...iconProps}/>)
        }
    },
    nativeModuleScreen: {
        screen: NativeModuleScreen,
        navigationOptions: {
            tabBarLabel: '原生',
            tabBarIcon: ({focused, horizontal, tintColor}) => (
                <EntypoIcon name='tools' color={tintColor} {...iconProps}/>)
        }
    }
})

const AppContainer = createAppContainer(bottomTabNavigator);

export default AppContainer
