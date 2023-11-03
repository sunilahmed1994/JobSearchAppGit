import React from 'react';
import { TouchableOpacity, Text, Image, View, } from 'react-native';
import { appStyles } from '../../services/utilities/appstyle';
import { fonts } from '../../services/utilities/fonts';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { sizes } from '../../services/utilities/sizes';
import { colors } from '../../services/utilities/colors';
const CustomButton = ({ text, onPress, textstyle, gradient, nogradient, styletouchableContainer, styleGradientContainer, buttonIcon }) => {
  return (
    <TouchableOpacity style={styletouchableContainer} onPress={onPress}>
      {nogradient && (
        <LinearGradient
          colors={['#C4C4C4', '#C4C4C4']} // Specify the gradient colors
          style={styleGradientContainer}
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={[appStyles.flexrow,appStyles.alignitemcenter]}>
            <Image source={buttonIcon} style={{marginRight:sizes.marginleft2,height:responsiveHeight(4),width:responsiveWidth(7)}}/>
            <Text style={{ fontSize: fonts.fontsize2,color:colors.black }}>{text}</Text>
          </View>
        </LinearGradient>
      )}
      {gradient && (

        <LinearGradient
          colors={['#C43B4E', '#629CD0']} // Specify the gradient colors
          style={styleGradientContainer}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={[appStyles.flexrow,appStyles.alignitemcenter]}>
            <Image source={buttonIcon} style={{marginRight:sizes.marginleft2,height:responsiveHeight(5),width:responsiveWidth(8)}}/>
            <Text style={textstyle}>{text}</Text>
          </View>
        </LinearGradient>
      )}
    </TouchableOpacity>
  );
};



export default CustomButton;
