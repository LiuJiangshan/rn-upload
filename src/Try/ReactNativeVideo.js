import React from 'react'
import Video from 'react-native-video'

export default class ReactNativeVideo extends React.Component {
  static navigationOptions = {
    headerTitle: 'react-native-video'
  }

  render () {
    return (<Video
      source={{uri: 'https://www.apple.com/105/media/us/iphone-xs/2018/674b340a-40f1-4156-bbea-00f386459d3c/films/design/iphone-xs-design-tpl-cc-us-2018_1280x720h.mp4'}}
      style={{flex: 1}}/>)
  }
}
