import React, { Component, ReactElement } from 'react';
import { Button, InputItem } from '@ant-design/react-native';
import { View, StyleSheet, Text } from 'react-native';
import { RootStackNavigation } from '../../navigator/index';

interface IState {
    account: string;
    password: string;
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: '80%',
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
    },
    input: {
        marginBottom: 15,
    },
    button: {
        width: 230,
        height: 40,
        borderRadius: 20,
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#278f8d',
        borderColor: 'transparent',
        letterSpacing: 3,
        color: '#fff',
    },

    other: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15,
        marginRight: 15,
    },
});

interface IProps {
    navigation: RootStackNavigation;
}
export default class Login extends Component<IProps> {
    state: IState = {
        account: '',
        password: '',
    };

    // 校验账号
    handleVerifyAccound(event: string): void {
        this.setState({ account: event });
    }

    // 校验密码
    handleVerifyPassword(event: string): void {
        this.setState({ password: event });
    }

    // 登录
    handleClickLogin(): void {
        const { navigation } = this.props;
        const { account, password } = this.state;
        if (account && password) {
            navigation.goBack();
        }
    }

    render(): ReactElement {
        const { account, password } = this.state;
        return (
            <View style={[styles.container]}>
                <View style={[styles.box]}>
                    <InputItem
                        clear
                        style={[styles.input]}
                        type="text"
                        value={account}
                        onChange={(event) => this.handleVerifyAccound(event)}
                        placeholder="Please enter your account number.">
                        账号：
                    </InputItem>
                    <InputItem
                        clear
                        style={[styles.input]}
                        value={password}
                        type="password"
                        onChange={(event) => this.handleVerifyPassword(event)}
                        placeholder="Please enter your password.">
                        密码：
                    </InputItem>
                    <View style={[styles.other]}>
                        <Text>手机号登录</Text>
                    </View>
                    <Button
                        style={[styles.button]}
                        onPress={() => this.handleClickLogin()}>
                        登录
                    </Button>
                </View>
            </View>
        );
    }
}
