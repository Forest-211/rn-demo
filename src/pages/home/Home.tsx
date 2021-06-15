import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../../assets/styles/home';
import { RootStackNavigation } from '../../navigator/index';

interface IProps {
    navigation: RootStackNavigation;
}

export type recomItem = {
    album_pic_mid: string;
    content_id: number;
    cover: string;
    creator: number;
    edge_mark: string;
    id: number;
    is_dj: boolean;
    is_vip: boolean;
    jump_url: string;
    listen_num: number;
    pic_mid: string;
    rcmdcontent: string;
    rcmdtemplate: string;
    rcmdtype: number;
    singerid: number;
    title: string;
    tjreport: string;
    type: number;
    username: string;
};

interface IState {
    recommend: recomItem[];
}

export default class Home extends Component<IProps> {
    state: IState = {
        recommend: [],
    };
    componentDidMount() {
        this.handleGetData();
    }

    // 获取数据
    async handleGetData() {
        const result = await axios.get('http://localhost:3200/getRecommend');
        const {
            // category,
            recomPlaylist,
            // playlist,
            // new_song,
            // new_album,
            // toplist,
            // focus,
        } = result.data.response;

        console.log(recomPlaylist.data.v_hot);
        this.setState({
            recommend: recomPlaylist.data.v_hot,
        });
    }

    // 跳转搜索
    handleJumpSearch() {
        const { navigation } = this.props;
        navigation.navigate('Search');
    }

    render() {
        const { recommend } = this.state;
        console.log('recomPlaylist:', this.state.recommend);
        return (
            <View style={[styles.container]}>
                {/* 搜索框导航 */}
                <Text
                    style={[styles.sesarchBox]}
                    onPress={() => this.handleJumpSearch()}>
                    搜索
                </Text>

                {/* 推荐 */}
                <View style={[styles.recommend]}>
                    <Text style={[styles.recommendTitle]}>今日为你推荐</Text>
                </View>

                {/* 数据遍历 */}
                {recommend.map((item) => (
                    <View key={item.content_id}>
                        <Text>{item.title}</Text>
                        <Image
                            source={{ uri: item.cover }}
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{ width: 110, height: 110 }}
                        />
                    </View>
                ))}
            </View>
        );
    }
}
