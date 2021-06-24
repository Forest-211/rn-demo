import React, { Component } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    // HeaderBackButton,
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
import MVPlay from '../pages/mv-play/MVPlay';
import CustomTitleBar from '../pages/custom-title-bar/CustomTitleBar';
import CustomHeader from '../components/CustomHeader';
import { Button } from '@ant-design/react-native';
import { Alert, Image } from 'react-native';
import Drawer from '../pages/drawer/Drawer';
import TopTab from '../pages/top-tab/TopTab';

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
    MVPlay: {
        vid: string;
    };
    CustomTitleBar: undefined;
    Drawer: undefined;
    TopTab: undefined;
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
                        options={{
                            headerTitle: '首页',
                            headerStyle: {
                                backgroundColor: 'red',
                            },
                            headerTintColor: '#fff',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                fontSize: 30,
                            },
                        }}
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
                    <Stack.Screen
                        name="MVPlay"
                        component={MVPlay}
                        options={{ headerTitle: 'mv' }}
                    />
                    <Stack.Screen
                        name="Drawer"
                        component={Drawer}
                        options={{ headerTitle: '抽屉导航' }}
                    />
                    <Stack.Screen
                        name="TopTab"
                        component={TopTab}
                        options={{ headerTitle: '顶部导航' }}
                    />
                    <Stack.Screen
                        name="CustomTitleBar"
                        component={CustomTitleBar}
                        options={{
                            headerTitle: (props) => <CustomHeader {...props} />,
                            // headerBackTitleVisible: false,
                            headerBackTitle: '1234',
                            headerRight: () => (
                                <Button onPress={() => Alert.alert('right')}>
                                    right
                                </Button>
                            ),
                            headerBackImage: () => (
                                <Image
                                    source={{
                                        uri: 'https://qpic.y.qq.com/music_cover/DhpicvGxCZozibtVUC0Q03Oia0h9DnKUNHPdPL3oD2tqUJiaYJUv1jvlEXbPvCCy4Vql/300?n=1',
                                    }}
                                    style={[
                                        {
                                            width: 60,
                                            height: 60,
                                            marginRight: 20,
                                        },
                                    ]}
                                />
                            ),
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
