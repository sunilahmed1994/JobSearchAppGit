import { StyleSheet, Text, View, Image, ScrollView, Alert, } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { appStyles } from '../../../services/utilities/appstyle'
import { iconMail, tickIconWhite, verifyEmail, lockPicReset, tickIconBlack } from '../../../services/utilities/assets'
import { sizes } from '../../../services/utilities/sizes'
import { fonts } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
import { CustomInput } from '../../../components/customInputField'
import CustomButton from '../../../components/customButton'
import CustomDigitInput from '../../../components/customDigitInput'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomTopBar from '../../../components/customTopBar'
import axios from 'axios';


const VerifyEmailScreen = ({ navigation, route }) => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
    // const digitInputs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];
    const email = route.params.email;
    const username = route.params.username;
    const API_BASE_URL = 'http://44.219.33.252:8080';

    // Use an effect to send OTP when the screen loads
    // useEffect(() => {
    //     // Make an API call to send the OTP to the user's email
    //     sendOtpToEmail(email);
    // }, [email]);

    // const sendOtpToEmail = async (email) => {
    //     try {
    //         const response = await axios.post(`${API_BASE_URL}/verifyOtp/${email}`, {
    //             email: email,
    //         });

    //         if (response.status === 200) {
    //             Alert.alert('OTP sent to email:', email);
    //         } else {
    //             Alert.alert('Failed to send OTP:', response.status);
    //         }
    //     } catch (error) {
    //         Alert.alert('API OTP request error:', error);
    //     }
    // };



    const verifyOtp = async (otp, email) => {
        const url = `${API_BASE_URL}/api/auth/verifyOtp/${email}`;
        try {
            const response = await axios({
                method: 'post',
                url: url,
                headers: {
                    'Authorization': 'Bearer token', // Note the space after 'Bearer'
                    'Content-Type': 'application/json',
                },
                data: {
                    email: email,
                    otp: otp,
                }
            });
            console.log(response.data);
            if (response.data.statusCode === 200) {
                Alert.alert('OTP verified successfully', response.data.message);
                navigation.navigate('authNavigation', { screen: 'LoginScreen', params: { email: email, username: username } });
                // Handle the case where OTP is verified successfully
                // You can navigate the user to the next scre en or perform other actions
            } else {
                Alert.alert('Failed to verify OTP:', response.data.message);
                // Handle the case where OTP verification failed
                // You can display an error message to the user or take appropriate action
            }
        } catch (error) {
            Alert.alert('API request error:', error.message);
            // Handle API request errors, e.g., network issues
            // You can display an error message to the user or take appropriate action
        }
    };
    const handleVerifyPress = () => {
        // Perform OTP verification here
        const enteredCode = parseInt(verificationCode.join(''), 10); // Convert the joined string to an integer
        verifyOtp(enteredCode,email);
        console.log(enteredCode);

    }
    const handleDigitChange = (index, digit) => {
        const newCode = [...verificationCode];
        newCode[index] = digit;
        setVerificationCode(newCode);
    };

    // Create an array of refs for the input fields
    const inputRefs = verificationCode.map(() => React.createRef());


    return (
        <View style={[appStyles.flexone, { height: responsiveHeight(5) }]}>
            <View >
                <CustomTopBar screenLabel={"Verify Your Email"} navigation={navigation} backtrue={true} />
            </View>
            <ScrollView style={[appStyles.flexone, { backgroundColor: colors.White }]}>

                <View style={[appStyles.alignitemcenter, { marginTop: sizes.margintop3 }]}>
                    <Image source={verifyEmail.verifyEmail} style={{ marginBottom: sizes.marginbottom3 }} />
                    <Text style={{ fontSize: fonts.fontsize25, color: colors.black, textAlign: 'center' }}>{"Verify Your Email"} </Text>
                    <Text style={{ fontSize: fonts.fontsize17, marginTop: sizes.margintop2, textAlign: 'center' }}>{"We have sent a 6-digit code on your provided email \n" + email} </Text>
                </View>

                <View >


                    <View style={[{ marginBottom: sizes.marginbottom3, flexDirection: 'row', marginTop: sizes.margintop3 }, appStyles.justifycontentcenter]}>

                        {verificationCode.map((digit, index) => (
                            <CustomDigitInput
                                key={index}
                                value={digit}
                                onChange={(text) => handleDigitChange(index, text)}
                                nextRef={inputRefs[index + 1]}

                            />
                        ))}

                    </View>



                </View>

                <View >
                    <View style={[appStyles.justifycontentcenter, appStyles.alignitemcenter, { marginBottom: sizes.marginbottom07, marginTop: sizes.margintop2 }]}>
                        <CustomButton
                            text="Verify"
                            onPress={handleVerifyPress}
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

export default VerifyEmailScreen

