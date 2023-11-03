import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {  Image  } from 'react-native';
import { splashBg,swanWhiteLogo,ducksObj } from '../../../services/utilities/assets';
import { appStyles } from '../../../services/utilities/appstyle';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Splash = ({navigation}) => {

  useEffect(() => {
    // Simulate some loading time, then navigate to the next screen
    setTimeout(() => {
      navigation.navigate('AskProfileType');
    }, 2000); // 2 seconds
  }, []);


  return (
    <View style={{flex:1}}>
       <ImageBackground source={splashBg.splashBg} style={[appStyles.backgroundImage,appStyles.flexone]} >
        

       </ImageBackground>
      
    </View>
  );
}



export default Splash;
