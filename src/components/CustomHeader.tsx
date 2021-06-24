import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class CustomHeader extends Component {
    render() {
        return (
            <View style={{ width: '100%', borderWidth: 1 }}>
                <Text>custom header</Text>
            </View>
        );
    }
}
