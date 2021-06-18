import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { RootStackNavigation, RootStackParamList } from '../../navigator/index';
import { RouteProp } from '@react-navigation/native';
import { getMvPlay } from '../../service/mv';

type Route = RouteProp<RootStackParamList, 'MVPlay'>;
interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

export default class MVPlay extends Component<IProps> {
    state = {};

    componentDidMount() {
        this.handleGetData();
    }
    async handleGetData() {
        const { vid } = this.props.route.params;
        const result = await getMvPlay(vid);
        console.log('result:', result);
    }
    render() {
        console.log('props:', this.props.route.params.vid);
        return (
            <View>
                <Text>mv play</Text>
            </View>
        );
    }
}
