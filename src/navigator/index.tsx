import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';
import Found from '../pages/found/Found';
import List from '../pages/list/List';
import Me from '../pages/me/Me';
import BottomTabs from './ButtomTab';
import Detail from '../pages/detail/Detail';
import Login from '../pages/login/Login';
import Search from '../pages/search/Search';
import Play from '../pages/play/Play';

export type RootStackParamList = {
    BottomTabs: undefined;
    List: undefined;
    Found: undefined;
    Me: undefined;
    Login: undefined;
    Detail: {
        topId: number;
    };
    Search: undefined;
    Play: {
        id: number;
    };
};

export type RootStackNavigation = StackNavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();
export default class Navigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="BottomTabs"
                        component={BottomTabs}
                        options={{ headerTitle: '首页' }}
                    />
                    <Stack.Screen
                        name="List"
                        component={List}
                        options={{ headerTitle: '榜单' }}
                    />
                    <Stack.Screen
                        name="Found"
                        component={Found}
                        options={{ headerTitle: '发现' }}
                    />
                    <Stack.Screen
                        name="Me"
                        component={Me}
                        options={{ headerTitle: '我的' }}
                    />
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerTitle: '登录' }}
                    />
                    <Stack.Screen
                        name="Detail"
                        component={Detail}
                        options={{ headerTitle: '歌单' }}
                    />
                    <Stack.Screen
                        name="Search"
                        component={Search}
                        options={{ headerTitle: '搜索' }}
                    />
                    <Stack.Screen
                        name="Play"
                        component={Play}
                        options={{ headerTitle: '歌曲' }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
