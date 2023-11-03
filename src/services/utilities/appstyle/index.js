import { StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
// import { fontFamily } from '../fonts'


export const appStyles = StyleSheet.create({

    flexone: {
        flex: 1
    },
    flexonefive: {
        flex: 1.5
    },
    backgroundImage: {
        resizeMode: 'cover', // or 'stretch' or 'contain'
    },
    loginHeaderLogoView: {
        justifyContent: 'space-around',
    },
    alignselfcenter: {
        alignSelf: 'center',
    },
    alignitemcenter: {
        alignItems: 'center'
    },
    justifycontentcenter: {
        justifyContent: 'center'
    },
    customInputContainer: {
        borderRadius: responsiveWidth(4),
        marginLeft: responsiveWidth(5),
        marginRight: responsiveWidth(5),
        borderColor: '#C4C4C4',
        borderWidth:responsiveWidth(0.3),
    },
    flexrow: {
        flexDirection: 'row'
    },
    flexcolumn: {
        flexDirection: 'column'
    },
    checkBox: {
        marginBottom: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        borderColor:'#FFFFC8',
        borderRadius:responsiveWidth(10),
    },
    dropdownsmall: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 13,
        width:responsiveWidth(30),
        height:responsiveHeight(7.5),
        borderRadius:responsiveWidth(4),
      },
      dropdownlarge: {
        borderColor: 'gray',
        borderWidth: 1,
        padding: 13,
        width:responsiveWidth(90),
        height:responsiveHeight(7.5),
        borderRadius:responsiveWidth(4),
      },
      

})