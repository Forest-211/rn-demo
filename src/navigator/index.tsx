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

export type RootStackParamList = {
    BottomTabs: undefined;
    List: undefined;
    Found: undefined;
    Me: undefined;
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
                        options={{ headerTitle: '分类' }}
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
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
