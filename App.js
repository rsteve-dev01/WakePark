/*
This is the file controlling navigtions
Every new screen will need to be added here in order to reach it in the app

To add a new screen:
1) Create the file in the 'Screens' directory
2) Import the main component from that file
3) In the Stack.Naviagtor below add:
  <Stack.Screen name="{Name of the Page}" component={"Name of the component"}/>
*/

import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignupScreen from "./Screens/Signup";
import LoginScreen from "./Screens/Login";
import OnboardingScreen from "./Screens/Onboarding";
import ForgotPassword from './Screens/Forgot-Password';
import HomePage from './Screens/Homepage';  
const Stack = createNativeStackNavigator();
import SupportPage from './Screens/SupportPage';
import {Provider} from 'react-redux';
import {store} from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 

export default function App(){
    return(
        <Provider store={store}>
            <SafeAreaProvider>  
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="SupportPage"
                    // Hide all headers on the pages
                    screenOptions = {{
                        headerShown: false
                    }}
                    >
                        <Stack.Screen name="SupportPage" component={SupportPage}/>
                        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen}/>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="Signup" component={SignupScreen}/>
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
                        <Stack.Screen name="HomePage" component={HomePage} />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    )
}