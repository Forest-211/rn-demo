import { RouteProp } from '@react-navigation/native';
import React, { Component, ReactElement } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    FlatList,
} from 'react-native';
import { RootStackNavigation, RootStackParamList } from '../../navigator/index';
import { getRanks } from '../../service/ranks';
import { Song } from '../../types/ranks';
import styles from '../../assets/styles/detail';
import { formatNumber } from '../../utils/index';
export type Route = RouteProp<RootStackParamList, 'Detail'>;
interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

interface IState {
    page: number;
    limit: number;
    AdShareContent: string;
    musichallTitle: string;
    frontPicUrl: string;
    intro: string;
    listenNum: number;
    song: Song[];
}
export default class Detail extends Component<IProps> {
    state: IState = {
        page: 1,
        limit: 10,
        AdShareContent: '',
        musichallTitle: '',
        frontPicUrl: '',
        intro: '',
        listenNum: 0,
        song: [],
    };

    componentDidMount() {
        this.handleGetData();
    }

    async handleGetData() {
        const { page, limit } = this.state;
        const { topId } = this.props.route.params;
        const result = await getRanks({ page, limit, topId });
        console.log('result:', result);
        this.setState({ ...result });
    }

    // 播放当前选择的歌单
    handleClickSong(id: number) {
        console.log('id:', id);
    }

    renderItem({ item }: { item: Song }): ReactElement {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.handleClickSong(item.songId)}
                key={item.albumMid}>
                <View style={[styles.songItem]}>
                    <View style={[styles.songCoverBox]}>
                        <Image
                            defaultSource={require('../../assets/images/1.jpeg')}
                            style={[styles.songCover]}
                            source={{ uri: item.cover }}
                        />
                    </View>
                    <View style={[styles.songerDetail]}>
                        <Text numberOfLines={1}>
                            {item.title}---
                            {item.singerName}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
    render() {
        const { musichallTitle, AdShareContent, frontPicUrl, song, listenNum } =
            this.state;
        return (
            <View style={[styles.container]}>
                <ScrollView style={[styles.scrollView]}>
                    {/* 歌单详情 */}
                    <View style={[styles.songDetail]}>
                        <Image
                            defaultSource={require('../../assets/images/1.jpeg')}
                            source={{ uri: frontPicUrl }}
                            style={[styles.frontPic]}
                            resizeMode="contain"
                        />
                        <View style={[styles.right]}>
                            <Text style={[styles.intro]}>{musichallTitle}</Text>
                            <Text style={[styles.desc]}>{AdShareContent}</Text>
                            <Text style={[styles.listenNum]}>
                                播放量：{formatNumber(listenNum)}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.songList]}>
                        {/* 便利歌单 */}
                        {song.map((item: Song, index: number) => (
                            <TouchableWithoutFeedback
                                onPress={() =>
                                    this.handleClickSong(item.songId)
                                }
                                key={item.albumMid}>
                                <View style={[styles.songItem]}>
                                    <View
                                        style={[
                                            styles.songCoverBox,
                                            { marginTop: index === 0 ? 10 : 0 },
                                        ]}>
                                        <Image
                                            defaultSource={require('../../assets/images/1.jpeg')}
                                            style={[styles.songCover]}
                                            source={{ uri: item.cover }}
                                        />
                                    </View>
                                    <View style={[styles.songerDetail]}>
                                        <Text numberOfLines={1}>
                                            {item.title}---{item.singerName}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        ))}
                        <FlatList
                            data={song}
                            renderItem={this.renderItem}
                            // keyExtractor={(item) => item.songId}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
