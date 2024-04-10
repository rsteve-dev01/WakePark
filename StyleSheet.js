import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
// (Forgot-Password, Homepage, Login, ParkingSpots, Payments, Profile, SaveParkingList, SavedPayments, Signup) -----------------------------------
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
// (Forgot-Password, Login, ParkingSpots, Payments, Signup) -----------------------------------
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    },
// (Forgot-Password, Login, ParkingSpots, Signup) -----------------------------------
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
// (Forgot-Password, Login, Signup) -----------------------------------
  loginButton: {
    backgroundColor: '#1d4f7e',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
// (Forgot-Password, Login) -----------------------------------
  centeredText: {
    textAlign: 'center',
  },
// (Homepage, SavedPayments) -----------------------------------
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
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
// (Login, ParkingSpots, Payments, Signup) -----------------------------------
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
// (Login, Payments) -----------------------------------
  input: {
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
// (Login, Signup) -----------------------------------
  signUpLink: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: 'blue',
    textDecorationLine: 'underline'
  },
// (ParkingSpots, Signup) -----------------------------------
  leftContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
// Forgot-Password Page
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
    resizeMode: 'contain',
    width: '50%',
    height: '20%',
    margin: 20,
  },
  marginText: {
    margin: 10,
    fontSize: 16,
  },
  emailInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
  },
// Homepage
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end', // Align title at the bottom
  },
  title: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fading effect background color
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    backgroundColor: '#F5F5F5',
  },
  homepageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  image: {
    width: '95%',
    height: '27%',
    margin: 10,
    borderRadius: 10,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  navIcon: {
    resizeMode: 'contain',
    width: 20,
    height: 20,
    marginRight: 5,
  },
  navItem: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  navText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  toggleButtons: {
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
    margin: 10,
  },
  parkingOptions: {
    position: 'absolute',
    top: 365,
    left: 30,
    right: 50,
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
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    marginBottom: 20,
    overflow: 'hidden',
  },
  optionText: {
    color: '#888',
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
    left: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: 'rgb(255, 255, 255)',
    overflow: 'hidden',
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 20,
    height: '100%',
    backgroundColor: '#F5F5F5',
  },
  drawerHeader: {
    flex: 0,
    height: "36%",
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 20,
    backgroundColor: '#b9dbe3',
  },
  drawerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  logoutLink: {
    color: 'blue',
    textDecorationLine: 'underline',
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
    width: 17,
    height: 17,
    marginRight: 5,
    resizeMode: 'contain',
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
    width: 35,
    height: 35,
  },
// Login Page
  greyText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  emailInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
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
// ParkingSpots Page
  cameraIcon: {
    top: 5,
    width: '20%',
    height: '50%',
    marginLeft: 5,
    resizeMode: 'contain',
  },
  exIcon: {
    top: 10,
    width: '10%',
    height: '30%',
    marginLeft: 5,
    resizeMode: 'contain',
  },
  parkingButton: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  parkingButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
// Profile Page
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    alignItems: 'center',
  },
  toggleButtonProfile: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
// Save Parking List Page
  ParkingListContainer: {
    marginTop: '50%',
    alignItems: 'center',
  },
  ParkingListTitle: {
    fontSize: 20,
  },
  scrollViewContent: {
    alignItems: 'center',
  },
// Signup Page
  showHideButton: {
    position: 'absolute',
    right: 10,
  },
  showHideButtonText: {
    color: '#888',
  },
  signupButton: {
    backgroundColor: '#1d4f7e',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  userInputSignup: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: '100%',
    backgroundColor: 'white',
  },
  inputSignup: {
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: 'white',
  },
// Unknown styling
  adjacentContainer: {
    flexDirection: "row"
  },
  leftText: {
    textAlign: 'left',
  },
});