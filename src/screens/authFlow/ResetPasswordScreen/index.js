import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../../services/utilities/appstyle'
import {  iconMail, tickIconWhite, sendIcon, lockPicReset } from '../../../services/utilities/assets'
import { sizes } from '../../../services/utilities/sizes'
import { fonts } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
import CustomInput from '../../../components/customInputField'


import CustomButton from '../../../components/customButton'


import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomTopBar from '../../../components/customTopBar'


const ResetPasswordScreen = ({ navigation }) => {

    const [email, setEmail] = useState('vishudrayan0@gmail.com');
  
    const handleSetResetLinkPress = () => {
        
        navigation.navigate('authNavigation', { screen: 'VerifyEmailScreen', params: { email: email } });
    }
    
    
    return (
        <View style={[appStyles.flexone, { height: responsiveHeight(5) }]}>
            <View >
                <CustomTopBar screenLabel={"Reset Password"} navigation={navigation} backtrue={true}/>
            </View>
            <ScrollView style={[appStyles.flexone, { backgroundColor: colors.White }]}>

                <View style={[appStyles.alignitemcenter, { marginBottom: sizes.marginbottom4, marginTop: sizes.margintop3 }]}>
                    <Image source={lockPicReset.lockPicReset} style={{marginBottom:sizes.marginbottom3}}/>
                    <Text style={{ fontSize: fonts.fontsize17, marginTop: sizes.margintop2, textAlign:'center' }}>{"Enter your registered email address to recieve a" + "\npassword reset link."} </Text>
                </View>

                <View >
                    
                    
                    <View style={{ marginBottom: sizes.marginbottom3 }}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow, appStyles.alignitemcenter]}
                            label="Email Address"
                            placeholder="example@email.com"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address" // Specify numeric keyboard for phone number
                            secureTextEntry={false}
                            source={iconMail.iconMail}
                        />
                    </View>
                    
                    
                    
                </View>

                <View >
                    <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom07, marginTop: sizes.margintop2 }]}>
                        <CustomButton
                            text="Send Reset Link"
                            onPress={handleSetResetLinkPress}
                            gradient={true}
                            styletouchableContainer={[sizes.touchableButton]}
                            styleGradientContainer={[sizes.touchableButton, appStyles.justifycontentcenter, appStyles.alignitemcenter, { borderRadius: sizes.borderRadius, fontWeight: fonts.fontweightbold, color: colors.black }]}
                            textstyle={{ fontSize: fonts.fontsize2, color: colors.White }}
                            buttonIcon={sendIcon.sendIcon}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default ResetPasswordScreen

