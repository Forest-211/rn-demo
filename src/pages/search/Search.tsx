import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import { SearchBar } from '@ant-design/react-native';

import styles from '../../assets/styles/search';

interface IState {
    searchValue: string;
}

export default class Search extends Component {
    state: IState = {
        searchValue: '',
    };
    render() {
        // const { searchValue } = this.state;
        return (
            <View>
                <View style={styles.container}>
                    {/* <SearchBar
                        style={[styles.searchInput]}
                        value={searchValue}
                        placeholder="搜索"
                    /> */}
                    <Text>搜索</Text>
                </View>
            </View>
        );
    }
}
