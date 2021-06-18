import { hp, wp } from '../../utils/index';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f6f6f6',
    },
    item: {
        width: wp(94),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        backgroundColor: '#fff',
    },
    picurl: {
        width: wp(90),
        height: hp(28),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    mvtitle: {
        fontSize: 16,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
    },
    detail: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    },
});

export default styles;
