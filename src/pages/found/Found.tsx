import { getMvByTag } from '../../service/mv';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { MVItem } from '../../types/mv';
import styles from '../../assets/styles/found';
import { formatNumber } from '../../utils/index';
import { RootStackNavigation } from '../../navigator/index';

interface IState {
    mvlist: MVItem[];
}

interface IProps {
    navigation: RootStackNavigation;
}
export default class Found extends Component<IProps> {
    state: IState = {
        mvlist: [],
    };

    componentDidMount() {
        this.handleGetMV();
    }

    // 获取mv数据
    async handleGetMV() {
        const mvlist = await getMvByTag();
        this.setState({ mvlist });
    }

    // 进入播放详情页
    handleClickItem(id: string) {
        const { navigation } = this.props;
        navigation.navigate('MVPlay', { vid: id });
    }

    render() {
        const { mvlist } = this.state;
        console.log('mvlist:', mvlist);
        return (
            <ScrollView style={[styles.container]}>
                {mvlist.map((item: MVItem) => (
                    <TouchableOpacity
                        key={item.vid}
                        activeOpacity={0.7}
                        style={[styles.item]}
                        onPress={() => this.handleClickItem(item.vid)}>
                        <View>
                            <Image
                                source={{ uri: item.picurl }}
                                style={[styles.picurl]}
                                resizeMode="contain"
                            />
                            <Text style={[styles.mvtitle]}>
                                {item.mvtitle}--{item.singer_name}
                            </Text>
                            <View style={[styles.detail]}>
                                <Text>
                                    播放量：{formatNumber(item.listennum)}
                                </Text>
                                <Text>时间：{item.publictime}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        );
    }
}
