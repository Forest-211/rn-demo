import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class SetStatus extends Component {
    render() {
        return (
            <View>
                <Text>设置status</Text>
                <StatusBar />
            </View>
        );
    }
}
