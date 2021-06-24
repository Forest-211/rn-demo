import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import {
    getFocusedRouteNameFromRoute,
    RouteProp,
    TabNavigationState,
} from '@react-navigation/native';
import { RootStackNavigation, RootStackParamList } from './index';
import Home from '../pages/home/Home';
import List from '../pages/list/List';
import Found from '../pages/found/Found';
import Me from '../pages/me/Me';

export type BottomTabParamList = {
    Home: undefined;
    List: undefined;
    Found: undefined;
    Me: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

type Route = RouteProp<RootStackParamList, 'BottomTabs'> & {
    state?: TabNavigationState<BottomTabParamList>;
};

interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

export default class BottomTabs extends Component<IProps> {
    // 获取每个页面的标题
    getHeaderTitle(route: any): string {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

        switch (routeName) {
            case 'Home':
                return '首页';
            case 'List':
                return '榜单';
            case 'Found':
                return '发现';
            case 'Me':
                return '我的';
            default:
                return '首页';
        }
    }

    componentDidUpdate() {
        const { navigation, route } = this.props;
        navigation.setOptions({
            headerTitle: this.getHeaderTitle(route),
        });
    }

    render() {
        return (
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#f86442', // 修改tabbar激活颜色
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ tabBarLabel: '首页' }}
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
                <Tab.Screen
                    name="Me"
                    component={Me}
                    options={{ tabBarLabel: '我的' }}
                />
            </Tab.Navigator>
        );
    }
}
