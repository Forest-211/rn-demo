import React, { Component, createRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import Video from 'react-native-video';
import { Button } from '@ant-design/react-native';
import { RootStackNavigation, RootStackParamList } from '../../navigator/index';
import { getMvPlay } from '../../service/mv';
import { hp } from '../../utils/index';
import styles from '../../assets/styles/mv-play';
import { formartTime } from '../../utils/format-time';

interface IState {
    player: unknown;
    isPlay: boolean;
    durationTime: number;
    currentPlayTime: number;
}

type Route = RouteProp<RootStackParamList, 'MVPlay'>;
interface IProps {
    navigation: RootStackNavigation;
    route: Route;
}

export default class MVPlay extends Component<IProps> {
    private player = createRef<Video>();

    state: IState = {
        player: '',
        isPlay: true,
        durationTime: 0,
        currentPlayTime: 0,
    };

    componentDidMount() {
        this.handleGetData();
    }
    async handleGetData() {
        const { vid } = this.props.route.params;
        const result = await getMvPlay(vid);
        console.log('result:', result);
    }

    onBuffer() {}

    videoError() {}

    // 暂停或者播放
    handleClickPlayOrPause() {
        this.setState({
            isPlay: !this.state.isPlay,
        });
    }

    // 视频加载完成后
    handleOnLoad(duration: number) {
        const time = formartTime(duration);
        console.log('duration:', duration);
        this.setState({
            durationTime: time,
        });
    }

    // 播放中获取当前播放时间
    handleOnProgress(currentTime: number) {
        const time = formartTime(currentTime);
        this.setState({
            currentPlayTime: time,
        });
        console.log(time);
    }

    render() {
        const { player, isPlay, durationTime, currentPlayTime } = this.state;
        console.log('player:', player);
        console.log('this.player:', this.player);
        return (
            <ScrollView>
                <View>
                    <Video
                        poster={
                            'https://y.gtimg.cn/music/photo_new/T015R640x360M101000zvsVL4Bsi25.jpg'
                        }
                        ref={this.player}
                        paused={isPlay}
                        source={{
                            uri: 'https://mv.music.tc.qq.com/516FAF2983AB09AFE98731993B6A53ADA0CA6FC28C20F5F102C3921271302D959A56ECB6BEDA8481B0CF7D8E398E017DZZqqmusic_default/qmmv_0a6bwoyaaaefatinbabqsaaaaufvpu4flacmn2ngiaaqibypbebq.f9814.mp4?fname=qmmv_0a6bwoyaaaefatinbabqsaaaaufvpu4flacmn2ngiaaqibypbebq.f9814.mp4',
                        }}
                        style={{
                            width: '94%',
                            height: hp(24.4668),
                            marginRight: 'auto',
                            marginLeft: 'auto',
                        }}
                        resizeMode="cover"
                        playInBackground
                        posterResizeMode="contain"
                        onEnd={() => this.handleClickPlayOrPause()}
                        onBuffer={() => this.onBuffer()} // Callback when remote video is buffering
                        onError={() => this.videoError()}
                        onLoad={({ duration }) => this.handleOnLoad(duration)}
                        onProgress={({ currentTime }) =>
                            this.handleOnProgress(currentTime)
                        }
                    />
                    <Button
                        style={{
                            width: 70,
                        }}
                        onPress={() => this.handleClickPlayOrPause()}>
                        {isPlay ? '播放' : '暂停'}
                    </Button>
                    <View style={[styles.detail]}>
                        <Text>已播放： {currentPlayTime}</Text>
                        <Text>总时长：{durationTime}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
