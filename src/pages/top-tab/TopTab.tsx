import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../home/Home';
import List from '../list/List';
import Found from '../found/Found';
import { RootStackNavigation, RootStackParamList } from '../../navigator/index';
import { RouteProp } from '@react-navigation/native';

export type TopTabParmasList = {
    Home: undefined;
    List: undefined;
    Found: undefined;
};

type Route = RouteProp<RootStackParamList, 'TopTab'>;
interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}
const Tab = createMaterialTopTabNavigator<TopTabParmasList>();

export default class TopTab extends Component<IProps> {
    componentDidMount() {
        console.log('route:', this.props.route);
        const { navigation } = this.props;
        navigation.setOptions({
            headerBackTitleVisible: false,
            // headerBackImage() {
            //     return null;
            // },
        });
    }
    componentDidUpdate() {
        console.log('route:', this.props.route);
    }

    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: 'red',
                    inactiveTintColor: '#ccc',
                    // tabbar 下划线样式
                    indicatorStyle: {
                        backgroundColor: 'red',
                    },

                    tabStyle: {
                        borderColor: 'red',
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarLabel: '   首页' }}
                />
                <Tab.Screen
                    name="List"
                    component={List}
                    options={{ tabBarLabel: '榜单' }}
                />
                <Tab.Screen
                    name="Found"
                    component={Found}
                    options={{ tabBarLabel: '发现' }}
                />
            </Tab.Navigator>
        );
    }
}
