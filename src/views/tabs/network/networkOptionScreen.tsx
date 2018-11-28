import React from "react"
import {SectionList, Text, View} from "react-native"
import {ListItem} from "react-native-elements"
import {NavigationScreenProps} from "react-navigation"

export default class NetworkOptionScreen extends React.Component<any, NavigationScreenProps> {
    private sections = [{
        title: 'axios',
        data: [{
            title: 'BilibiliDemo',
            onPress: () => {
                this.props.navigation.navigate('bilibiliDemoScreen')
            }
        }]
    }]

    static renderItem({item}) {
        return (<ListItem {...item} key={item.title}/>)
    }

    static renderSectionHeader({section}) {
        return (
            <View style={{
                backgroundColor: '#f4f4f4',
                height: 25,
                justifyContent: 'center'
            }}>
                <Text style={{fontSize: 18}}>{section.title}</Text>
            </View>
        )
    }

    keyExtractor = (item, index) => index

    render() {
        return (
            <SectionList keyExtractor={this.keyExtractor} sections={this.sections}
                         renderSectionHeader={NetworkOptionScreen.renderSectionHeader}
                         renderItem={NetworkOptionScreen.renderItem}/>
        )
    }
}
