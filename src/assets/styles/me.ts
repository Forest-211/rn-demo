import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ddd',
    },
    userinfo: {
        width: '96%',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: 80,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    info: {
        flexDirection: 'row',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        overflow: 'hidden',
        marginTop: -10,
        marginLeft: 10,
        marginRight: 10,
    },
    avatarImage: {
        width: 40,
        height: 40,
    },
    nickname: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginTop: 8,
    },
    items: {
        marginLeft: 15,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    item: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
    num: {
        fontSize: 12,
        fontWeight: '200',
    },
    line: {
        width: 1,
        height: 14,
        backgroundColor: '#ccc',
        opacity: 0.6,
        marginLeft: 15,
        marginRight: 15,
    },
    custom: {
        width: '96%',
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
});

export default styles;
