import { getTopLists } from '../../service/topLists';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableHighlight,
} from 'react-native';
import { Item } from '../../types/topLists';
import styles from '../../assets/styles/list';
import { RootStackNavigation } from '../../navigator/index';

interface IState {
    source: Item[];
    page: number;
}

interface IProps {
    navigation: RootStackNavigation;
}
export default class List extends Component<IProps> {
    state: IState = {
        source: [],
        page: 1,
    };
    componentDidMount() {
        this.handleGetData();
    }

    async handleGetData() {
        const { page } = this.state;
        const result = await getTopLists(page);
        this.setState({ source: result });
    }

    // 榜单详情页
    handleJumpDetail(topId: number) {
        const { navigation } = this.props;
        console.log('naigation:', navigation);
        navigation.navigate('Detail', { topId });
    }

    render() {
        const { source } = this.state;
        return (
            <ScrollView style={[styles.container]}>
                {source.map((item) => {
                    return (
                        <View style={[styles.item]} key={item.id}>
                            <TouchableHighlight
                                style={[styles.coverBox]}
                                onPress={() => this.handleJumpDetail(item.id)}>
                                <Image
                                    style={[styles.coverImage]}
                                    source={{ uri: item.picUrl }}
                                    resizeMode="contain"
                                />
                            </TouchableHighlight>
                            <View style={[styles.songList]}>
                                {item.songList.map((sitem, sindex) => (
                                    <View key={sitem.songname}>
                                        <Text
                                            numberOfLines={1}
                                            key={sitem.songname}
                                            style={[
                                                styles.song,
                                                {
                                                    marginTop:
                                                        sindex === 0 ? 10 : 0,
                                                },
                                            ]}>
                                            {sitem.songname} --{' '}
                                            {sitem.singername}
                                        </Text>
                                        <Text />
                                    </View>
                                ))}
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        );
    }
}
