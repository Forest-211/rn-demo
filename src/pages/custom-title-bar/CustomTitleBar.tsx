import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from '@ant-design/react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerParamList } from '../../pages/drawer/Drawer';

export type IProps = {
    navigation: DrawerNavigationProp<DrawerParamList>;
};

interface IState {
    isOpen: boolean;
}
export default class CustomTitleBar extends Component<IProps> {
    state: IState = {
        isOpen: false,
    };

    handleClickOpenOrClose() {
        const { navigation } = this.props;
        navigation.toggleDrawer();
    }
    render() {
        const { isOpen } = this.state;
        return (
            <View>
                <Text>自定义头部组件</Text>
                <Button onPress={() => this.handleClickOpenOrClose()}>
                    {isOpen ? 'close' : 'open'} drawer
                </Button>
            </View>
        );
    }
}
