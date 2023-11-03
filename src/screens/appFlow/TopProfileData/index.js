import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { userImage1 } from '../../../services/utilities/assets'
import { responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import CustomTopBar from '../../../components/customTopBar'
import { sizes } from '../../../services/utilities/sizes'
import { fonts } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
const TopProfileData = ({ navigation, route }) => {

    const profile = route.params.profile;
    // console.log(profile);
    return (
        <View style={{backgroundColor:colors.White}}> 
            <View>
                <CustomTopBar backtrue={true} screenLabel={'Welcome To ' + profile.name + ' Profile'} navigation={navigation} />
            </View>
            <ScrollView >
                <View style={[styles.rightColumn,]}>
                    <Image source={userImage1} style={styles.profileImage} />

                </View>
                <Text style={[{ fontSize: fonts.fontsize25, color: colors.black, alignSelf: 'center', marginTop: sizes.margintop1 }]}>Details of freelancer</Text>
                <View style={{ height: responsiveHeight(60), width: responsiveWidth(90), borderRadius: 10, borderWidth: 1, alignSelf: 'center', marginTop: sizes.margintop2 }}>
                    <Text style={styles.profileName}>Name: {profile.name}</Text>
                    <Text style={styles.profileName}>Country: {profile.country}</Text>
                    <Text style={styles.profileName}>Experienc: {profile.experience}</Text>
                    <Text style={styles.profileName}>Skills: {profile.skills}</Text>
                    <Text style={styles.profileName}>Educaiton: {profile.education}</Text>
                    <Text style={styles.profileName}>completedJobs: {profile.completedJobs}</Text>
                    <Text style={styles.profileName}>Rating: {profile.rating}</Text>
                    <Text style={styles.profileName}>Last Active: {profile.noticeperiod}</Text>
                    <Text style={styles.profileName}>User Description: {profile.description}</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default TopProfileData

const styles = StyleSheet.create({
    rightColumn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: sizes.marginleft3,
        color:colors.black,
        marginBottom:sizes.marginbottom2,
    },
    profileImage: {
        width: responsiveWidth(30),
        height: responsiveWidth(30),
        borderRadius: 100,
        marginTop: responsiveHeight(2),
    },
})