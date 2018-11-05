import React, { Component } from 'react'
import { Image, View } from 'react-native'
import { Button } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'

export default class Home extends Component {
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
      })
    }
    const openImageLibrary = () => {
      ImagePicker.launchImageLibrary(pcikerOptions, response => {
      })
    }

    return (
      <View>
        <Button title='启动相机' onPress={launchCamera}/>
        <Button title='打开相册' onPress={openImageLibrary}/>
      </View>
    )
  }
}
