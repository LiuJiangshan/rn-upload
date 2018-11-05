import React from 'react'
import { Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imgSource: {uri: 'https://www.apple.com/v/imac-pro/c/images/overview/allinone_large.jpg'}
    }
  }

  setImgSource (response) {
    this.setState({imgSource: {uri: response.uri}})
  }

  render () {
    const renderIcon = () => (<Image/>)
    const getLabel = () => 'label'
    const onItemPress = () => {}
    const items = [{}, {}]
    const pcikerOptions = {
      title: 'Select Avatar',
      customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    const launchCamera = () => {
      ImagePicker.launchCamera(pcikerOptions, response => {
        this.setImgSource(response)
      })
    }
    const openImageLibrary = () => {
      ImagePicker.launchImageLibrary(pcikerOptions, response => {
        this.setImgSource(response)
      })
    }

    return (
      <View>
        <Button title='启动相机' onPress={launchCamera}/>
        <Button title='打开相册' onPress={openImageLibrary}/>
        <Image source={this.state.imgSource} style={{width: 500, height: 500}}/>
      </View>
    )
  }
}
