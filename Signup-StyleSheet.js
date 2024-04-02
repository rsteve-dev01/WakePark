import {StyleSheet} from 'react-native';
export const signUpStyles = StyleSheet.create({
    leftContainer:{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 8, 
        paddingHorizontal: 14,
        backgroundColor: 'white',
        borderColor: '#ccc',
        width: '100%',
        marginBottom: 10,
    },
    signUpInput: {
        flex: 1, 
        paddingVertical: 10, 
        paddingRight: 10, 
        fontSize: 16,
    },
    mainContainer: {
        marginTop: 70, 
        margin: 40,
    },
    signUpIcon: { 
        marginLeft: 10,
    },
    container: {
        flexDirection: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
});