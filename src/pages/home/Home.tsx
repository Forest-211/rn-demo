import { viewportWidth, wp } from '../../utils/index';
import axios from 'axios';
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
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
    swiper: string[];
}
const sideWidth = wp(90);
const itemWidth = sideWidth + wp(2) * 2;

export default class Home extends Component<IProps> {
    state: IState = {
        recommend: [],
        swiper: [
            '../../assets/images/swiper/swiper-01.gif',
            '../../assets/images/swiper/swiper-02.jpeg',
            '../../assets/images/swiper/swiper-03.jpeg',
            '../../assets/images/swiper/swiper-04.jpeg',
        ],
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
        recomPlaylist.data.v_hot.map((item: recomItem) => {
            item.cover = item.cover.replace('http://', 'https://');
        });
        this.setState({
            recommend: recomPlaylist.data.v_hot,
        });
    }

    // 跳转搜索
    handleJumpSearch() {
        const { navigation } = this.props;
        navigation.navigate('Search');
    }
    onHorizontalSelectedIndexChange(index: number) {
        /* tslint:disable: no-console */
        console.log('horizontal change to', index);
    }

    renderItem({ item }: { item: string }) {
        return <Image source={{ uri: item }} style={[styles.image]} />;
    }

    render() {
        const { recommend, swiper } = this.state;
        return (
            <View style={[styles.container]}>
                {/* 搜索框导航 */}
                <Text
                    style={[styles.sesarchBox]}
                    onPress={() => this.handleJumpSearch()}>
                    搜索
                </Text>

                <ScrollView style={[styles.scrollView]}>
                    {/* 推荐 */}
                    <View style={[styles.recommend]}>
                        <Text style={[styles.recommendTitle]}>
                            今日为你推荐
                        </Text>
                        <Image
                            source={{
                                uri: 'https://qpic.y.qq.com/music_cover/DhpicvGxCZozibtVUC0Q03Oia0h9DnKUNHPdPL3oD2tqUJiaYJUv1jvlEXbPvCCy4Vql/300?n=1',
                            }}
                            style={[
                                styles.swiperCover,
                                { marginTop: 20, marginBottom: 20 },
                            ]}
                        />
                    </View>
                    <View
                        style={[
                            styles.image,
                            {
                                borderWidth: 1,
                                width: wp(90),
                                marginBottom: 20,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                justifyContent: 'center',
                            },
                        ]}>
                        <Carousel
                            data={swiper}
                            renderItem={this.renderItem}
                            sliderWidth={viewportWidth}
                            itemWidth={itemWidth}
                        />
                    </View>

                    {/* 数据遍历 */}
                    {recommend.map((item) => (
                        <View key={item.content_id}>
                            <Text>{item.title}</Text>
                            {/* <Image
                                source={{ uri: item.cover }}
                                style={[styles.image]}
                            /> */}
                            <Image
                                // source={require('../../assets/images/swiper/swiper-02.jpeg')}
                                source={{ uri: item.cover }}
                                style={[
                                    styles.swiperCover,
                                    { marginTop: 20, marginBottom: 20 },
                                ]}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}
