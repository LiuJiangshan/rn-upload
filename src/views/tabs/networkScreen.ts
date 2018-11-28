import {createStackNavigator} from "react-navigation"
import NetworkOptionScreen from './network/networkOptionScreen'
import BilibiliDemoScreen from './network/bilibiliDemoScreen'

const networkScreen = createStackNavigator({
    networkOptionScreen: {
        screen: NetworkOptionScreen,
        navigationOptions: {
            title: '网络'
        }
    },
    bilibiliDemoScreen: {
        screen: BilibiliDemoScreen,
        navigationOptions: {
            title: 'BilibiliDemo'
        }
    }
})
export default networkScreen
