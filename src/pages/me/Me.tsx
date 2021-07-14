import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { RootStackNavigation } from '../../navigator/index';
import styles from '../../assets/styles/me';
import { Button } from '@ant-design/react-native';

interface IState {
    nickname: string;
}

interface IProps {
    navigation: RootStackNavigation;
}
export default class Me extends Component<IProps> {
    state: IState = {
        nickname: '',
    };

    // 登录
    handleClickLogin() {
        const { nickname } = this.state;
        const { navigation } = this.props;
        if (nickname) {
            return;
        }
        console.log(this.props);
        navigation.navigate('Login');
    }

    handleClickJump() {
        const { navigation } = this.props;
        navigation.navigate('CustomTitleBar');
    }

    render() {
        const { nickname } = this.state;
        return (
            <View style={[styles.container]}>
                <View style={[styles.userinfo]}>
                    {/* 用户信息展示模块 */}
                    <View style={[styles.info]}>
                        <View style={[styles.avatar]}>
                            <Image
                                source={{
                                    uri: 'https://avatars.githubusercontent.com/u/56526369',
                                }}
                                style={[styles.avatarImage]}
                            />
                        </View>
                        <Text
                            style={[styles.nickname]}
                            onPress={() => this.handleClickLogin()}>
                            {nickname || '点击登录'}
                        </Text>
                    </View>
                    <View style={[styles.items]}>
                        <Text style={[styles.item]}>
                            关注 <Text style={[styles.num]}>0</Text>
                        </Text>
                        <Text style={[styles.line]} />
                        <Text style={[styles.item]}>
                            粉丝 <Text style={[styles.num]}>0</Text>
                        </Text>
                        <Text style={[styles.line]} />
                        <Text style={[styles.item]}>
                            新歌提醒 <Text style={[styles.num]}>暂无更新</Text>
                        </Text>
                    </View>
                </View>

                <Button
                    style={[styles.custom]}
                    onPress={() => this.handleClickJump()}>
                    自定义头部样式呀
                </Button>
                <Button
                    style={[styles.custom]}
                    onPress={() => this.props.navigation.navigate('Drawer')}>
                    抽屉导航
                </Button>
                <Button
                    style={[styles.custom]}
                    onPress={() => this.props.navigation.navigate('TopTab')}>
                    top tab switch
                </Button>
                <Button
                    style={[styles.custom]}
                    onPress={() =>
                        this.props.navigation.navigate('CustomBottonTab')
                    }>
                    custom botton tabbar
                </Button>

                <Button
                    style={[styles.custom]}
                    onPress={() => this.props.navigation.navigate('SetStatus')}>
                    set status
                </Button>
            </View>
        );
    }
}
