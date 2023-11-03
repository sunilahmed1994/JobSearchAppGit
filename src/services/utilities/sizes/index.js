import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"

export const sizes = {
    margintop1:responsiveHeight(1),
    margintop2:responsiveHeight(2),
    margintop3:responsiveHeight(3),
    margintop4: responsiveHeight(4),
    margintop5:responsiveHeight(5),
    margintop6:responsiveHeight(6),
    margintop7:responsiveHeight(7),
    margintop10:responsiveHeight(10),

    marginbottom1:responsiveHeight(1),
    marginbottom2:responsiveHeight(2),
    marginbottom3:responsiveHeight(3),
    marginbottom4:responsiveHeight(4),
    marginbottom5:responsiveHeight(5),
    marginbottom07:responsiveHeight(7),
    marginbottom08:responsiveHeight(8),
    marginbottom10:responsiveHeight(10),

    marginleft1: responsiveWidth(1),
    marginleft15: responsiveWidth(1.5),
    marginleft2: responsiveWidth(2),
    marginleft3: responsiveWidth(3),
    marginleft4: responsiveWidth(4),
    marginleft5: responsiveWidth(5),

    marginright1: responsiveWidth(1),
    marginright15: responsiveWidth(1.5),
    marginright2: responsiveWidth(2),
    marginright3: responsiveWidth(3),
    
    touchableButton: {
        width: responsiveWidth(70),
        height: responsiveHeight(8),
    },
    touchableButtonskip: {
        width: responsiveWidth(42),
        height: responsiveHeight(7),
    },
    borderRadius: responsiveWidth(4.5),

}