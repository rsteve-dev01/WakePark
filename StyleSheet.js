import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    leftContainer:{
      flex: 1,
      paddingHorizontal: 20,
    },
    adjacentContainer:{
      flexDirection: "row"
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,
    },
    loginText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
    },
    greyText: {
      fontSize: 16,
      color: '#888',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 15,
      marginBottom: 10,
      width: '100%',
      backgroundColor: 'white',
    },
    passwordInputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 15,
      marginBottom: 10,
      width: '100%',
      backgroundColor: 'white',
    },
    passwordInput: {
      flex: 1,
      paddingVertical: 10,
      fontWeight: 'normal',
    },
    forgotButton: {
      paddingVertical: 10,
    },
    forgotText: {
      color: 'blue',
    },
    loginButton: {
      backgroundColor: 'black',
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 40,
      alignItems: 'center',
      marginTop: 20,
    },
    parkingButton: {
      backgroundColor: 'dimgrey',
      borderRadius: 50,
      paddingVertical: 15,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginTop: 20,
    },
    loginButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    parkingButtonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      fontStyle: 'italic'
    },
    signUpLink: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    centeredText: {
      textAlign: 'center',
    },
    leftText:{
      textAlign: 'left',
    },
    signUpText: {
      color: 'blue',
      textDecorationLine: 'underline'
    },
    backButton: {
      position: 'absolute',
      top: 40,
      left: 20,
      zIndex: 10, 
    },
    backIcon: {
      width: 30, 
      height: 30, 
    },
    fgpIcon: {
      width: '30%',
      height: '20%',
      margin: 20,
    },
    marginText: {
      margin: 10,
      fontSize: 16,
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
  },
  image: {
      width: '90%',
      height: '30%',
      margin: 30,
      borderRadius: 10,
  },
  container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 5,
  },
  titleText: {
      fontSize: 20,
      fontWeight: 'bold',
  },
  toggleButtons: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '95%',

  },
  toggleText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    margin: 20,
  },
  parkingOptions: {
    position: 'absolute',
    bottom: 100,
    left: 30,
    right: 50,
    paddingHorizontal:1,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    
  },
  optionDescription: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
    left: 10,
    top: 10,
    paddingVertical: 5,
    paddingHorizontal: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: 20,
    overflow: 'hidden',
  },
  optionText: {
    color: '#888',
    fontSize: 20,
    textAlign: 'center',
    padding: 5,
    left: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    borderWeight: 50,
    backgroundColor: 'rgb(255, 255, 255)',
    overflow: 'hidden',
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: '#F5F5F5',
  },
  menuIconContainer: {
      position: 'absolute',
      top: '7%',
      right: '10%',
      zIndex: 1,
  },
  menuIcon: {
      width: 30,
      height: 30,
  },
  navigationBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
  },
  navItem: {
      alignItems: 'center',
      paddingHorizontal: 10,
  },
  navIcon: {
      width: 20,
      height: 20,
      marginRight: 5,
  },
  navText: {
      color: '#000',
      fontSize: 13,
      fontWeight: 'bold',
      fontStyle: 'italic',
  },
  contactContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginTop: 'auto',
      marginBottom: 10,
      marginRight: 10,
  },
  contactText: {
      fontSize: 20,
      marginRight: 10,
  },
  supportIcon: {
      width: 45,
      height: 45,
  },
  camera: {
    flex: 1,
  },
  });