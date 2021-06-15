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
        width: '90%',
        height: 180,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    recommendTitle: {
        fontSize: 16,
        color: '#333',
        fontWeight: '300',
    },
});

export default styles;
