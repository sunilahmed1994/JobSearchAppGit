
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { leftArrow } from '../../services/utilities/assets';
import { fonts } from '../../services/utilities/fonts';
import { colors } from '../../services/utilities/colors';


const CustomTopBar = ({ navigation, screenLabel, backtrue}) => {


    const backIconPress = () => {
        // navigation.navigate('appNavigation', { screen: 'BottomTab', params: { screen: 'AccountScreen' } })
        navigation.goBack();
    };

    return (
        <View style={[appStyles.flexrow,appStyles.justifycontentcenter, { backgroundColor:'white',height:responsiveHeight(8), alignItems:'center',width:responsiveWidth(100)}]}>
            {backtrue && (
            <View style={{height:responsiveHeight(8),justifyContent:'center',alignItems:'center',width:responsiveWidth(20)}}>
                <TouchableOpacity onPress={backIconPress}>
                    <Image source={leftArrow.leftArrow} style={{ width: responsiveWidth(7), height: responsiveWidth(7), marginLeft:responsiveWidth(-2) }} />
                </TouchableOpacity>
            </View>
            )}
            <View style={[appStyles.justifycontentcenter,{height:responsiveHeight(8), alignItems:'center',width:responsiveWidth(80)}]}>
                <Text style={[  { color:colors.black, fontWeight:'bold', fontSize:fonts.fontsize2,marginLeft:responsiveWidth(-5) }]}>{screenLabel}</Text>
            </View>
        </View>
    );
};



export default CustomTopBar;

