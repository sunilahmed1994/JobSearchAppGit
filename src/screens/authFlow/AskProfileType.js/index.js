import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../../services/utilities/appstyle'
import { swanLogo, iconMail, eyeIcon, lockIcon,userIcon,loginIconWhite, jobSeekerIcon } from '../../../services/utilities/assets'
import { sizes } from '../../../services/utilities/sizes'
import { fonts } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
import CustomButton from '../../../components/customButton'


import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
const UserRole='';
const AskProfileType = ({ navigation }) => {
  
 
  const handleJobSeekerLoginPress = () => {
    navigation.navigate('authNavigation', { screen: 'LoginScreen' ,params:{UserRole:'ROLE_USER'} });
  }
  const handleCompanyLoginPress = () => {
    navigation.navigate('authNavigation', { screen: 'LoginScreen',params:{UserRole:'ROLE_ADMIN'} });
  }
  

  return (
    <ScrollView style={[appStyles.flexone,{backgroundColor:colors.White}]}>

      <View style={[appStyles.loginHeaderLogoView,  appStyles.alignselfcenter,{margin:sizes.margintop7,marginBottom:sizes.marginbottom07}]}>
        <Image
          source={jobSeekerIcon.jobSeekerIcon} style={{width:responsiveWidth(40), height:responsiveHeight(22)}}
        />
      </View>

      <View style={[ appStyles.alignselfcenter,{marginBottom:sizes.marginbottom08}]}>
        <Text style={{ fontSize: fonts.fontsize3, fontWeight: '500', color: colors.black, marginBottom: responsiveHeight(1.5) }}>Your Career Helper</Text>
        
      </View>


      <View >
        <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter,{marginBottom:sizes.marginbottom07,marginTop:sizes.margintop2}]}>
          <CustomButton 
            text="Job Seeker" 
            onPress={handleJobSeekerLoginPress} 
            nogradient={true}
            styletouchableContainer={[sizes.touchableButton]} 
            styleGradientContainer={[sizes.touchableButton,appStyles.justifycontentcenter,appStyles.alignitemcenter,{borderRadius:sizes.borderRadius,fontWeight:fonts.fontweightbold,color:colors.black }]} 
            textstyle={{fontSize:fonts.fontsize2, color:colors.black}}
            buttonIcon={jobSeekerIcon.jobSeekerIcon}
            />
        </View>
        <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter,{marginBottom:sizes.marginbottom07}]}>
          
          <CustomButton 
            text="Company" 
            onPress={handleCompanyLoginPress} 
            nogradient={true} 
            styletouchableContainer={[sizes.touchableButton]} 
            styleGradientContainer={[sizes.touchableButton,appStyles.justifycontentcenter,appStyles.alignitemcenter,{borderRadius:sizes.borderRadius, }]} 
            textstyle={{fontSize:fonts.fontsize2, color:colors.black}}
            buttonIcon={userIcon.userIcon}
            />
        </View>
      </View>
    </ScrollView>
  )
}

export default AskProfileType

const styles = StyleSheet.create({})