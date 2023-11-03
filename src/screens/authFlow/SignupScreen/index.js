import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native'
import React, { useState } from 'react'
import { appStyles } from '../../../services/utilities/appstyle'
import { iconMail, userIcon, lockIcon, tickIconBlack, jobSeekerIcon } from '../../../services/utilities/assets'
import { sizes } from '../../../services/utilities/sizes'
import { fonts } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
import CustomInput from '../../../components/customInputField'
import CustomCheckbox from '../../../components/customCheckBox'
import CustomButton from '../../../components/customButton'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomTopBar from '../../../components/customTopBar'
import axios from 'axios';


const SignupScreen = ({ navigation, route }) => {

    const UserRole = route.params.UserRole;
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Track password visibility


    const handleCreateButtonPress = async () => {
        if (!isChecked) {
            Alert.alert('Please accept the Terms & Conditions.');
            return;
        }
        console.log("User Role Selected is " + UserRole);

        try {
            const response = await axios({
                method: 'post',
                url: 'http://44.219.33.252:8080/api/auth/signup',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    username: userName,
                    email: email,
                    password: password,
                    role: [{ name: UserRole }]
                }
            });

            if (response.data.statusCode === 200) {
                Alert.alert(response.data.message);
                console.log('Response data:', response.data)
                navigation.navigate('authNavigation', { screen: 'VerifyEmailScreen', params: { email: email, username: userName } });
            } else {
                console.log('Signup failed with status code:', response.data.statusCode);
                console.log(response.data);
                Alert.alert(response.data.message);
            }
        } catch (error) {
            console.log('API request error:', error.message);
            Alert.alert('An error occurred. Please try again later.', error.message);
        }
    };

    const handleCheckChange = () => {

        setIsChecked(!isChecked);
        console.log(isChecked);
    };

    const handleTogglePassword = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };
    return (
        <View style={[appStyles.flexone, { height: responsiveHeight(5) }]}>
            <View >
                <CustomTopBar screenLabel={"Create an Account"} navigation={navigation} backtrue={true} />
            </View>
            <ScrollView style={[appStyles.flexone, { backgroundColor: colors.White }]}>

                <View style={[appStyles.alignselfcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom4 }]}>
                    <Image
                        source={jobSeekerIcon.jobSeekerIcon} style={{ width: responsiveWidth(27), height: responsiveHeight(15), marginTop:sizes.margintop1 }}
                    />
                    <Text style={{ fontSize: fonts.fontsize2, marginTop: sizes.margintop2 }}>Enter Details Below to SignUp</Text>
                </View>

                <View >

                    <View style={{ marginBottom: sizes.marginbottom3 }}>
                        <CustomInput
                            styleContainer={[appStyles.customInputContainer, appStyles.flexrow, appStyles.alignitemcenter]}
                            label="User Name"
                            placeholder="john doe"
                            value={userName}
                            onChangeText={setUserName}
                            keyboardType="default" // Specify numeric keyboard for phone number
                            secureTextEntry={false}
                            source={userIcon.userIcon}

                        />
                    </View>
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
                    <View style={{ marginBottom: sizes.marginbottom3 }}>
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
                                isChecked={isChecked}
                                onCheckChange={handleCheckChange}
                                tintcolor={colors.checkboxtintcolor}
                            />
                        </View>
                        <View style={{ marginBottom: responsiveHeight(1.3), marginLeft: sizes.marginleft1 }}>
                            <Text style={[fonts.fontsize17, appStyles.alignselfcenter]}>
                                Accept <Text style={{ textDecorationLine: 'underline', fontWeight: fonts.fontweightbold }}>Terms & Condition</Text>
                            </Text>
                        </View>

                    </View>
                </View>

                <View >
                    <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom07, marginTop: sizes.margintop2 }]}>
                        <CustomButton
                            text="Create Account"
                            onPress={handleCreateButtonPress}
                            nogradient={true}
                            styletouchableContainer={[sizes.touchableButton]}
                            styleGradientContainer={[sizes.touchableButton, appStyles.justifycontentcenter, appStyles.alignitemcenter, { borderRadius: sizes.borderRadius, fontWeight: fonts.fontweightbold, color: colors.black }]}
                            textstyle={{ fontSize: fonts.fontsize2, color: colors.White }}
                            buttonIcon={tickIconBlack.tickIconBlack}
                        />
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

export default SignupScreen

const styles = StyleSheet.create({})