import { React, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Image, } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { sizes } from '../../services/utilities/sizes';
import { fonts } from '../../services/utilities/fonts';

const StatContainer = ({
    label,
    noOfJobs,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    keyboardType,
    source,
    toggleImagePress,
    maxLength,
    styleContainer,
    styleInput,
    inputtext2,
    onFocus,
    onBlur,
    ontouchEnd

}) => {


    return (

        <View style={{ backgroundColor: 'lightgray', width: responsiveWidth(35), height: responsiveWidth(35), margin: sizes.marginleft5, borderRadius: responsiveWidth(5) }}>
            <TouchableOpacity onPress={toggleImagePress}>
                <View style={[appStyles.alignselfcenter, appStyles.justifycontentcenter, { margin: sizes.margintop1 }]}>
                    <Image source={source} style={{ width: responsiveWidth(10), height: responsiveWidth(10) }} />
                </View>

                <View style={[appStyles.alignitemcenter, appStyles.justifycontentcenter, { margin: responsiveWidth(0.5) }]}>
                    <Text style={[{ fontSize: fonts.fontsize2, fontWeight: 'bold', marginLeft: responsiveWidth(1) }]}>{label}</Text>
                </View>
                <View style={[appStyles.alignitemcenter,]}>
                    <Text style={[{ fontSize: fonts.fontsize25, fontWeight: 'bold' }]}>{noOfJobs}</Text>
                </View>

            </TouchableOpacity>
        </View>

    );
};



export default StatContainer;
