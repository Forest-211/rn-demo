import { hp, wp } from '../../utils/index';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f6f6f6',
    },
    sesarchBox: {
        height: 36,
        borderRadius: 20,
        width: '94%',
        marginTop: 10,
        lineHeight: 36,
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth: 1,
        borderColor: '#fefefe',
        fontSize: 18,
        fontWeight: '300',
        overflow: 'hidden',
        paddingLeft: 15,
    },
    recommend: {
        width: '94%',
        // height: 180,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    recommendTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '300',
    },

    scrollView: {
        width: '100%',
        height: '100%',
        marginTop: 15,
    },
    swiperBox: {
        width: '100%',
        height: 120,
    },
    swiperCover: {
        width: '100%',
        height: hp(40),
    },
    image: {
        width: wp(90),
        height: hp(36),
    },
    center: {
        marginRight: 'auto',
        marginLeft: 'auto',
    },

    data: {
        marginBottom: 20,
        paddingBottom: 20,
        width: wp(94),
        backgroundColor: '#fff',
    },
    dataImageBox: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
        width: wp(88),
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    dataImage: {
        marginTop: 20,
        marginBottom: 20,
        width: wp(88),
    },
});

export default styles;
