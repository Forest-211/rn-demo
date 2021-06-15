import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { RootStackNavigation } from '../../navigator/index';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
    },
    userinfo: {
        width: '96%',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: 80,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    info: {
        flexDirection: 'row',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        overflow: 'hidden',
        marginTop: -10,
        marginLeft: 10,
        marginRight: 10,
    },
    avatarImage: {
        width: 40,
        height: 40,
    },
    nickname: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginTop: 8,
    },
    items: {
        marginLeft: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    item: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    num: {
        fontSize: 12,
        fontWeight: '200',
    },
    line: {
        width: 1,
        height: 14,
        backgroundColor: '#ccc',
        opacity: 0.6,
        marginLeft: 15,
        marginRight: 15,
    },
});

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
            </View>
        );
    }
}
