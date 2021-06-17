import { hp, wp } from '../../utils/index';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#f5f5f5',
    },
    songDetail: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginTop: 10,
    },
    scrollView: {
        width: '96%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    intro: {
        fontSize: 24,
    },
    desc: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 20,
    },
    frontPic: {
        width: wp(30),
        height: hp(15),
    },
    right: {
        flexDirection: 'column',
        marginLeft: 10,
        marginTop: 10,
    },
    songList: {
        height: '100%',
        paddingTop: 15,
    },

    songItem: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#fff',
        marginBottom: 12,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 2,
    },

    songCoverBox: {
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
    },

    songCover: {
        width: 60,
        height: 60,
    },
    listenNum: {
        fontSize: 14,
        marginTop: 5,
    },
    songerDetail: {
        flexDirection: 'column',
        marginLeft: 10,
    },
});

export default styles;
