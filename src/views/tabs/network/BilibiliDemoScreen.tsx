import React from 'React'
import {FlatList, Text, View} from "react-native"


export default class BilibiliDemoScreen extends React.Component {

    private data = [
        {title: 'hello'},
        {title: 'hi'}
    ]


    static renderItem({item}) {
        console.log(item)
        return (
            <View>
                <Text>
                    {item.title}
                </Text>
            </View>
        )
    }

    static keyExtractor(item, index) {
        return index
    }

    render() {
        return (
            <FlatList keyExtractor={BilibiliDemoScreen.keyExtractor} renderItem={BilibiliDemoScreen.renderItem}
                      data={this.data}/>)
    }
}
