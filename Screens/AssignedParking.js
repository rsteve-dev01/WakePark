
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';


export const AssignedParking = ({ navigation }) => {
    return (
        <ImageBackground source={require('../assets/Background.jpg')}
        style={styles.background}>

        {/* Title */}
        <View style={styles.titleContainer}>
            <Image source={require('../assets/icon.png')} style={styles.icon}/>
        </View>

        {/* Text */}
        <View style={styles.parkingContainer}>
            <Text style={styles.parkingText}>Get Assigned Parking</Text>
        </View>

        {/* Assigned */}
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.assignButton} activeOpacity={0.7}>
                        <Text style={styles.buttonText}>ASSIGN</Text>
                
            </TouchableOpacity>
            

        </View>
        
            

        

        </ImageBackground>
    
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      },
    icon: {
        alignContent: 'center',
        width: 100,
        height: 100,
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
      },
    parkingContainer: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        width: '95%',
      },
    parkingText: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'lightblue',
        margin: 20,
      },
    buttonContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    assignButton: {
        backgroundColor: '#FFD700',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 10,
      },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
      },
    

});


export default AssignedParking;

