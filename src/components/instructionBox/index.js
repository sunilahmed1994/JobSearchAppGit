import { Text, View, Image, } from 'react-native'
import React, { useState, useRef } from 'react'
import { appStyles } from '../../../src/services/utilities/appstyle'
import { checkCircleIcon } from '../../../src/services/utilities/assets'
import { sizes } from '../../../src/services/utilities/sizes'
import { fonts } from '../../../src/services/utilities/fonts'
import { colors } from '../../../src/services/utilities/colors'

import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'



const InstructionBox = ({ labelDescription, labelHeading }) => {


    return (
        <View style={[appStyles.flexone,appStyles.flexrow, { height: responsiveHeight(12), width: responsiveWidth(90),borderRadius:responsiveWidth(3), borderWidth:1}]}>

            <View style={{margin:responsiveWidth(2)}}>
                <Image source={checkCircleIcon.checkCircleIcon} style={{ marginBottom: sizes.marginbottom3 }} />
            </View>
            <View style={[appStyles.flexone,appStyles.flexcolumn]}>
                <Text style={{ fontSize: fonts.fontsize17, color: colors.black,marginTop: sizes.margintop1 }}>{labelHeading} </Text>
                <Text style={{ fontSize: fonts.fontsize17, marginTop: sizes.margintop1,  }}>{labelDescription} </Text>
            </View>



        </View>
    )
}

export default InstructionBox

