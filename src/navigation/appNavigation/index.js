import React ,{Component, useState} from 'react';
import {  Image  } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../../screens/authFlow/LoginScreen';
import TopProfileData from '../../screens/appFlow/TopProfileData';

import WelcomeScreen from '../../screens/appFlow/WelcomeScreen';


const Stack = createNativeStackNavigator();


const AppNavigation =({navigation})=> {
 
    return (
     
            <Stack.Navigator >
              {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: 'Login Page' }} /> */}
              
              
              <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown:false }} />
              <Stack.Screen name="TopProfileData" component={TopProfileData} options={{ headerShown:false }} />
              
              
            </Stack.Navigator>
       
    );

 
};

export default AppNavigation;
