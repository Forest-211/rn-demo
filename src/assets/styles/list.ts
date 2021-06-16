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

    coverImage: {
        width: wp(30),
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
