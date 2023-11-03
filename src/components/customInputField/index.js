import { React, useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, Image, } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'

const CustomInput = ({
    label,
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
        <View>
            <View>
                <Text style={[appStyles.label, appStyles.fontBold,{marginLeft:responsiveWidth(6),marginBottom:responsiveWidth(1)}]}>{label}</Text>
            </View>
            <View style={[styleContainer]}>


                <View style={{ flex: 0.5, marginLeft:responsiveWidth(3) }}>
                    <TouchableOpacity onPress={toggleImagePress}><Image source={source} /></TouchableOpacity>
                </View>

                <View style={{ flex: 4 }}>

                    {onChangeText ? (
                        <TextInput
                            style={[styleInput]}
                            placeholder={placeholder}
                            value={value}
                            onTouchEnd={ontouchEnd}
                            onChangeText={onChangeText}
                            secureTextEntry={secureTextEntry}
                            keyboardType={keyboardType}
                            maxLength={maxLength} // Add the maxLength prop
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                    ) : (
                        <Text style={inputtext2}>{value}</Text>
                    )}
                </View>

            </View>
        </View>
    );
};



export default CustomInput;
