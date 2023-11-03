import React  from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../../../src/screens/authFlow/LoginScreen';
import Splash from '../../../src/screens/authFlow/SplashScreen';
import SignupScreen from '../../screens/authFlow/SignupScreen';
import ResetPasswordScreen from '../../screens/authFlow/ResetPasswordScreen';
import VerifyEmailScreen from '../../screens/authFlow/VerifyEmailScreen';
import AskProfileType from '../../screens/authFlow/AskProfileType.js';

const Stack = createNativeStackNavigator();

const AuthNavigation =()=> {
 
    return (
     
         
            <Stack.Navigator >
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />  
              <Stack.Screen name="AskProfileType" component={AskProfileType} options={{ headerShown: false }} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{ headerShown: false }} />
              <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} options={{ headerShown: false }} />
              
            </Stack.Navigator>
         
      
    );
  
 
};

export default AuthNavigation;
