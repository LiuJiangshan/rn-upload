import React from 'react'
import { Button, Image, ScrollView, StyleSheet, View } from 'react-native'
import ImagePicker from 'react-native-image-picker'

export default class PickImage extends React.Component {
  static navigationOptions = {
    headerTitle: 'react-native-image-picker'
  }

  constructor (props) {
    super(props)
    this.state = {
      imgSource: {uri: 'https://www.apple.com/v/imac-pro/c/images/overview/allinone_large.jpg'},
      imgSize: {width: 500, height: 500}
    }
  }

  setImgSource (response) {
    this.setState({
      imgSource: {uri: response.uri},
      imgSize: {width: response.width, height: response.height}
    })
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
      <View style={styles.rootView}>
        <View style={{flexDirection: 'row'}}>
          <Button title='启动相机' onPress={launchCamera}/>
          <Button title='打开相册' onPress={openImageLibrary}/>
        </View>
        <ScrollView horizontal={true}>
          <ScrollView horizontal={false}>
            <Image source={this.state.imgSource} style={this.state.imgSize}/>
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rootView: {flex: 1, alignItems: 'center', justifyContent: 'center'}
})
