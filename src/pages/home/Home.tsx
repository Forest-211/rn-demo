import { formatNumber, hp, replaceAgreement, wp } from '../../utils/index';
import axios from 'axios';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Button,
    Linking,
    Alert,
    // TouchableHighlight,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import styles from '../../assets/styles/home';
import { RootStackNavigation } from '../../navigator/index';
import { Banner } from '../../types/album';
import { getDigitalAlbumLists } from '../../service/album';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    banner: Banner[];
}
const sideWidth = wp(90);
const itemWidth = sideWidth + wp(2) * 2;

export default class Home extends Component<IProps> {
    state: IState = {
        recommend: [],
        swiper: [],
        banner: [],
    };
    componentDidMount() {
        this.handleGetData();
        this.handleGetBanner();
    }

    async handleGetBanner() {
        const { banner, swiper } = await getDigitalAlbumLists();
        this.setState({ banner, swiper });
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

        recomPlaylist.data.v_hot.map((item: recomItem) => {
            item.cover = replaceAgreement(item.cover);
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
        return (
            <Image
                source={{ uri: item }}
                style={{
                    height: hp(18),
                    width: wp(94),
                }}
                resizeMode="contain"
            />
        );
    }

    handleClickJmupDetail(url: string) {
        if (!url) {
            return Alert.alert('地址为空！');
        }
        Linking.openURL(url);
    }

    render() {
        const { recommend, swiper } = this.state;
        return (
            <View style={[styles.container]}>
                <Icon name="rocket" size={30} color="#900" />
                {/* 搜索框导航 */}
                <Text
                    style={[styles.sesarchBox]}
                    onPress={() => this.handleJumpSearch()}>
                    搜索
                </Text>

                <ScrollView style={[styles.scrollView]}>
                    {/* 轮播图 */}
                    <View
                        style={{
                            width: wp(94),
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}>
                        <Carousel
                            loop
                            autoplay
                            data={swiper}
                            renderItem={this.renderItem}
                            sliderWidth={itemWidth}
                            itemWidth={itemWidth}
                            layout={'tinder'}
                            layoutCardOffset={9}
                        />
                    </View>

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

                    {/* 数据遍历 */}
                    {recommend.map((item) => (
                        <View
                            key={item.content_id}
                            style={[styles.center, styles.data]}>
                            <View style={[styles.dataImageBox]}>
                                <Image
                                    source={{ uri: item.cover }}
                                    style={[
                                        styles.swiperCover,
                                        styles.dataImage,
                                    ]}
                                />
                            </View>
                            <Text style={{ fontSize: 18, marginLeft: 14 }}>
                                {item.title}
                            </Text>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                }}>
                                <Text style={{ fontSize: 16, marginLeft: 14 }}>
                                    播放量：{formatNumber(item.listen_num)}
                                </Text>
                                <Button
                                    title="详情"
                                    onPress={() =>
                                        this.handleClickJmupDetail(
                                            item.jump_url,
                                        )
                                    }
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        );
    }
}
