import { getTopLists } from '../../service/topLists';
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Item } from '../../types/topLists';
import styles from '../../assets/styles/list';

interface IState {
    source: Item[];
    page: number;
}
export default class List extends Component {
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

    render() {
        const { source } = this.state;
        return (
            <ScrollView style={[styles.container]}>
                {source.map((item) => {
                    return (
                        <View style={[styles.item]} key={item.id}>
                            <Image
                                style={[styles.coverImage]}
                                source={{ uri: item.picUrl }}
                                resizeMode="contain"
                            />
                            <View style={[styles.songList]}>
                                {item.songList.map((sitem, sindex) => (
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
                                        {sitem.songname} -- {sitem.singername}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    );
                })}
            </ScrollView>
        );
    }
}
