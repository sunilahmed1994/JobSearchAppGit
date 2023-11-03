import { StyleSheet, Text, View, Image, ScrollView, Alert ,TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react'
import { appStyles } from '../../../services/utilities/appstyle'
import { swanLogo, iconMail, eyeIcon, lockIcon, userIcon, loginIconWhite, jobSeekerIcon, googleColorIcon } from '../../../services/utilities/assets'
import { sizes } from '../../../services/utilities/sizes'
import { fonts } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
import CustomInput from '../../../components/customInputField'
import CustomCheckbox from '../../../components/customCheckBox'
import CustomTouchableText from '../../../components/customTextTouchable'
import CustomButton from '../../../components/customButton'
import axios from 'axios';

import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { jwtDecode } from 'jwt-decode'

const LoginScreen = ({ navigation, route }) => {
  const UserRole = route.params.UserRole;
  const username = route.params.username;
  // const [userId, SetUserId] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  const [email, setEmail] = useState("vishudrayan0@gmail.com");
  const [password, setPassword] = useState('Vishu123');
  const [showPassword, setShowPassword] = useState(false); // Track password visibility
  
  // Conditionally render the "Continue with Google" button based on user role
  const renderGoogleButton = () => {
    if (UserRole === 'ROLE_USER') {
      return (
        <CustomButton
          text="Continue With Google"
          onPress={handleContinueWithGooglePress}
          nogradient={true}
          styletouchableContainer={[sizes.touchableButton]}
          styleGradientContainer={[sizes.touchableButton, appStyles.justifycontentcenter, appStyles.alignitemcenter, { borderRadius: sizes.borderRadius, fontWeight: fonts.fontweightbold, color: colors.black }]}
          textstyle={{ fontSize: fonts.fontsize2, color: colors.White }}
          buttonIcon={googleColorIcon.googleColorIcon}
        />
      );
    }
    // Return null if the user role is not ROLE_USER (button won't be shown)
    return null;
  };

const handleLoginButtonPress = async () => {
  navigation.navigate('appNavigation', { screen: 'WelcomeScreen', params: { username: username } });
}
  // const handleLoginButtonPress = async () => {
  //   console.log(UserRole);

  //   try {
  //     const response = await axios({
  //       method: 'post',
  //       url: 'http://44.219.33.252:8080/api/auth/signin',
  //       headers: {
  //         'Content-Type': 'application/json', // Set the content type to JSON
  //       },
  //       data: {
  //         email: email,
  //         password: password,
  //         // "role":[{"name":UserRole}],
  //       }
  //     });

  //     if (response.status === 200) {
  //       const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaXNzIjoiMjdmNDI3NWMtNzZkYi00Mzg1LTg0OTYtODYxNTY1NWFlMTEyIiwiaWF0IjoxNjk4Nzc4ODQ4LCJleHAiOjE2OTkzODM2NDh9.L_rcS4i1buqrEWIU8qwbJKOyUzSXHE5fUNHSsaYUh-Vh1Oq5OEN8F6jYXZVju3mCz10j_GxB8F--IqB1cjz3xw";
  //       // Login successful, handle the response as needed
  //       console.log('Login Successful:', response.data);
  //       console.log(token);

  //       // // Decode the JWT token to extract user information
  //       // const decodedToken = jwtDecode(token);
  //       // const name = decodedToken.username;
  //       // console.log("User ID from JWT:", name);

  //       Alert.alert('Login successful');
  //       console.log(username);
  //       navigation.navigate('appNavigation', { screen: 'WelcomeScreen', params: { username: username } });

  //       // Navigate to the next screen or perform other actions
  //       // navigation.navigate('HomeScreen');
  //     } else {
  //       // Handle other response status codes
  //       Alert.alert('Login failed with status code:', response.status);

  //     }
  //   } catch (error) {
  //     // Handle API request errors
  //     Alert.alert("API request error:", error.message)

  //   }

  // }
  const handleContinueWithGooglePress = () => {
    console.log('continue with google pressed');
  }
  const handleSignupButtonPress = () => {
    navigation.navigate('authNavigation', { screen: 'SignupScreen', params: { UserRole: UserRole } });
  }
  const handleForgotTextPress = () => {
    // setLoading(false);
    navigation.navigate('authNavigation', { screen: 'ResetPasswordScreen', params: { UserRole: UserRole } });
  };
  const handleRememberPasswordChange = (newValue) => {
    setRememberPassword(newValue);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  
  return (
    <ScrollView style={[appStyles.flexone, { backgroundColor: colors.White }]}>

      <View style={[appStyles.loginHeaderLogoView, appStyles.alignselfcenter, { margin: sizes.margintop4, marginBottom: sizes.marginbottom07 }]}>
        <Image
          source={jobSeekerIcon.jobSeekerIcon} style={{ width: responsiveWidth(30), height: responsiveHeight(17) }}
        />
      </View>

      <View style={[appStyles.alignselfcenter, { marginBottom: sizes.marginbottom3 }]}>
        <Text style={{ fontSize: fonts.fontsize3, fontWeight: '500', color: colors.black, marginBottom: responsiveHeight(1.5) }}>Login To Your Account</Text>
        <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom2, marginTop: sizes.margintop1 }]}>
          {renderGoogleButton()}
        </View>
        <Text style={{ fontSize: fonts.fontsize2, fontWeight: fonts.fontweightbold, alignSelf: 'center', marginBottom: sizes.marginbottom1 }}>OR</Text>
        <Text style={{ fontSize: fonts.fontsize17, }}>Enter Your Email Address and Password</Text>
      </View>

      <View >
        <View style={{ marginBottom: sizes.marginbottom1 }}>
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
        <View style={{ marginBottom: sizes.marginbottom1 }}>
          <CustomInput
            styleContainer={[appStyles.customInputContainer, appStyles.flexrow, appStyles.alignitemcenter]}
            label="Password"
            placeholder="Minimum 8 Characters"
            value={password}
            onChangeText={setPassword}
            keyboardType="default" // Specify numeric keyboard for phone number
            secureTextEntry={!showPassword}
            source={lockIcon.lockIcon}
            toggleImagePress={handleTogglePassword}
          />
        </View>
        <View style={[appStyles.alignitemcenter, appStyles.flexrow, { marginLeft: sizes.marginleft3 }]}>
          <View>
            <CustomCheckbox
              isChecked={rememberPassword}
              onCheckChange={handleRememberPasswordChange}
              tintcolor={colors.checkboxtintcolor}
            />
          </View>
          <View style={{ marginBottom: responsiveHeight(1.3), marginLeft: sizes.marginleft1 }}>
            <Text style={[fonts.fontsize17, appStyles.alignselfcenter]}>Remember Me</Text>
          </View>
          <CustomTouchableText text="Forgot Password?" onPress={handleForgotTextPress} style={{ fontSize: fonts.fontsize17, marginBottom: responsiveHeight(1.3), marginLeft: responsiveWidth(30) }} />
        </View>
      </View>

      <View >
        <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom4, marginTop: sizes.margintop1 }]}>
          <CustomButton
            text="Login"
            onPress={handleLoginButtonPress}
            nogradient={true}
            styletouchableContainer={[sizes.touchableButton]}
            styleGradientContainer={[sizes.touchableButton, appStyles.justifycontentcenter, appStyles.alignitemcenter, { borderRadius: sizes.borderRadius, fontWeight: fonts.fontweightbold, color: colors.black }]}
            textstyle={{ fontSize: fonts.fontsize2, color: colors.White }}
            buttonIcon={loginIconWhite.loginIconWhite}
          />
        </View>
        <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom07 }]}>
          <Text style={{ marginBottom: sizes.marginbottom2 }}>Don't have an account?</Text>
          <CustomButton
            text="Create an Account"
            onPress={handleSignupButtonPress}
            nogradient={true}
            styletouchableContainer={[sizes.touchableButton]}
            styleGradientContainer={[sizes.touchableButton, appStyles.justifycontentcenter, appStyles.alignitemcenter, { borderRadius: sizes.borderRadius, }]}
            textstyle={{ fontSize: fonts.fontsize2, color: colors.black }}
            buttonIcon={userIcon.userIcon}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})