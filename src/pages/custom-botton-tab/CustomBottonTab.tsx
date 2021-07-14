import { RootStackNavigation, RootStackParamList } from '../../navigator/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    getFocusedRouteNameFromRoute,
    RouteProp,
    TabNavigationState,
} from '@react-navigation/native';
import React, { Component } from 'react';
import Home from '../home/Home';
import List from '../list/List';
import Found from '../found/Found';
import Me from '../me/Me';
import { Image } from 'react-native';

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
export default class CustomBottonTab extends Component<IProps> {
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
                }}
                screenOptions={() => ({
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={{
                                    uri: 'https://qpic.y.qq.com/music_cover/DhpicvGxCZozibtVUC0Q03Oia0h9DnKUNHPdPL3oD2tqUJiaYJUv1jvlEXbPvCCy4Vql/300?n=1',
                                }}
                                style={[{ width: 32, height: 32 }]}
                            />
                        );
                    },
                })}>
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
