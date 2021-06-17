import { hp, wp } from '../../utils/index';
import { StyleSheet } from 'react-native';

const setyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingTop: 10,
        backgroundColor: '#f5f5f5',
    },

    item: {
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: wp(94),
        height: hp(14),
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },

    coverBox: {
        width: wp(30),
        height: hp(14),
        borderWidth: 0,
        overflow: 'hidden',
        marginLeft: 0,
        padding: 0,
        borderRadius: 0,
    },

    coverImage: {
        width: wp(30),
        height: hp(14),
        margin: 0,
    },

    songList: {
        width: wp(62),
        overflow: 'hidden',
    },

    song: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333',
        marginBottom: 6,
        flexWrap: 'nowrap',
    },
});

export default setyles;
