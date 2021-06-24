import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Detail from '../detail/Detail';
import CustomTitleBar from '../custom-title-bar/CustomTitleBar';

export type DrawerParamList = {
    CustomTitleBar: undefined;
    Detail: undefined;
};

const Drawers = createDrawerNavigator<DrawerParamList>();
export default class Drawer extends Component {
    render() {
        return (
            <Drawers.Navigator initialRouteName="CustomTitleBar">
                <Drawers.Screen
                    name="CustomTitleBar"
                    component={CustomTitleBar}
                />
                <Drawers.Screen name="Detail" component={Detail} />
            </Drawers.Navigator>
        );
    }
}
