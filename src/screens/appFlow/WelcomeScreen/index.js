import { StyleSheet, Text, View, Image, ScrollView, Modal, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { appStyles } from '../../../services/utilities/appstyle'
import { menuIcon, userImage1, jobPostIcon, searchIcon } from '../../../services/utilities/assets'
import { sizes } from '../../../services/utilities/sizes'
import { colors } from '../../../services/utilities/colors'
// import CustomButton from '../../../components/customButton'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
// import CustomTopBar from '../../../components/customTopBar'
import axios from 'axios'
import { launchImageLibrary } from 'react-native-image-picker';
import StatContainer from '../../../components/statContainer'
import CustomInput from '../../../components/customInputField'
import { fonts } from '../../../services/utilities/fonts'
const WelcomeScreen = ({ navigation, route }) => {

  const username = route.params.username;
  const [imageSource, setImageSource] = useState(null);
  const [noOfJobs, setNoOfJobs] = useState('21');
  const [totalSelectedJobs, setTotalSelectedJobs] = useState('10');
  const [search, setSearch] = useState('');
  const [displayedProfiles, setDisplayedProfiles] = useState([]);  // State to keep track of displayed profiles
  // Define a list of top freelancer profiles (replace with your data)
  const topFreelancerProfiles = [
    {
      id: 1,
      name: 'Freelancer 1',
      pic: 'profile_image_url_1',
      rating: 4.5,
      country: 'Country 1',
      completedJobs: 50,
      description: 'Profile description for Freelancer 1',
      skills: 'React Native',
      noticeperiod: 'time',
      experience:'5 Years',
      education:'MS(CS)',
    },
    {
      id: 2,
      name: 'Freelancer 2',
      pic: 'profile_image_url_2',
      rating: 4.8,
      country: 'Country 2',
      completedJobs: 60,
      description: 'Profile description for Freelancer 2',
      skills: 'UI/UX Designer',
      noticeperiod: 'time',
      experience:'5 Years',
      education:'MS(CS)',
    },
    {
      id: 3,
      name: 'Freelancer 3',
      pic: 'profile_image_url_2',
      rating: 4.8,
      country: 'Country 2',
      completedJobs: 60,
      description: 'Profile description for Freelancer 2',
      skills: 'UI/UX Designer',
      noticeperiod: 'time',
      experience:'5 Years',
      education:'MS(CS)',
    },
    {
      id: 4,
      name: 'Freelancer 4',
      pic: 'profile_image_url_2',
      rating: 4.8,
      country: 'Country 2',
      completedJobs: 60,
      description: 'Profile description for Freelancer 2',
      skills: 'UI/UX Designer',
      noticeperiod: 'time',
      experience:'5 Years',
      education:'MS(CS)',
    },
    {
      id: 5,
      name: 'Freelancer 5',
      pic: 'profile_image_url_2',
      rating: 4.8,
      country: 'Country 2',
      completedJobs: 60,
      description: 'Profile description for Freelancer 2',
      skills: 'UI/UX Designer',
      noticeperiod: 'time',
      experience:'5 Years',
      education:'MS(CS)',
    },
    {
      id: 6,
      name: 'Freelancer 6',
      pic: 'profile_image_url_2',
      rating: 4.8,
      country: 'Country 2',
      completedJobs: 60,
      description: 'Profile description for Freelancer 2',
      skills: 'UI/UX Designer',
      noticeperiod: 'time',
      experience:'5 Years',
      education:'MS(CS)',
    },
    {
      id: 7,
      name: 'Freelancer 7',
      pic: 'profile_image_url_2',
      experience:'5 Years',
      education:'MS(CS)',
      rating: 4.8,
      country: 'Country 2',
      completedJobs: 60,
      description: 'Profile description for Freelancer 2',
      skills: 'UI/UX Designer',
      noticeperiod: 'time',
    },
    // Add more profiles as needed
  ];
  // const API_BASE_URL = 'http://44.219.33.252:8080';

  const searchProfiles = () => {
    Alert.alert('Searched Profile');
  }
  const openMenuPress = () => {
    Alert.alert('Menu Options will apear here');
  }
  const handleTotalJobs = () => {
    Alert.alert('Total Jobs posted will apear here');
  }
  const handleTotalBookmarkedJobs = () => {
    Alert.alert('Total Bookmarked Jobs will apear here');
  }
  const handleTotalInterviewing = () => {
    Alert.alert('Total Interviewing Jobs will apear here');
  }
  const handdleTotalSelectedJobs = () => {
    Alert.alert('Total Bookmarked Jobs will apear here');
  }

  // Function to navigate to the detailed profile view
  const handleProfilePress = (profile) => {
    // Navigate to the detailed profile view, passing the selected profile as a parameter
    navigation.navigate('TopProfileData', { profile });
    Alert.alert('Switch to profile');
  };
  // Load the first 5 profiles when the component mounts
  useEffect(() => {
    setDisplayedProfiles(topFreelancerProfiles.slice(0, 5));
  }, []);
  // useEffect(() => {
  //   axios
  //     .get('http://44.219.33.252:8080/getTopMatchingProfile')
  //     .then((response) => {
  //       console.log('Responce from Top Profile',response.data);
  //       const fetchedProfiles = response.data;
  //       setProfiles(fetchedProfiles);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       Alert.alert('API Request Error', error.message);
  //     });
  // }, []);

  const openImageLibrary = () => {
    let options = {
      storageOptions: {
        mediaType: 'photo', // Specify that we want to select photos
        quality: 1,
      },
    };

    launchImageLibrary(options, async (response) => {
      if (response && response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;

        setImageSource(imageUri);

      } else {
        // Handle the case where the user canceled without selecting an image
        Alert.alert("You did not select an image.");
      }
    });
  }


  return (
    <View style={[appStyles.flexone, { backgroundColor: colors.White }]}>
      {/* <View >
        <CustomTopBar screenLabel={["Welcome ", username]} navigation={navigation} backtrue={true} />
      </View> */}
      <ScrollView style={[appStyles.flexone, { backgroundColor: colors.White, marginTop: sizes.margintop2 }]}>
        <View style={[appStyles.flexrow,]}>

          <View style={{ flex: 3, justifyContent: 'center' }}>
            <TouchableOpacity onPress={openMenuPress} style={styles.menuIcon}>
              <Image source={menuIcon.menuIcon} style={styles.menuIcon} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: 'lightgrey', height: responsiveWidth(20), width: responsiveWidth(20), alignSelf: 'center', borderRadius: responsiveWidth(100), }}>
              <TouchableOpacity onPress={openImageLibrary}>
                {imageSource ? (
                  <Image source={{ uri: imageSource }} style={styles.userImage} />
                ) : (
                  <Image source={userImage1} style={styles.userImage} />
                )}
              </TouchableOpacity>
            </View>
          </View>

        </View>
        <View style={{ marginBottom: sizes.marginbottom1 }}>
          <CustomInput
            styleContainer={[appStyles.customInputContainer, appStyles.flexrow, appStyles.alignitemcenter]}
            // label="Email Address"
            placeholder="Search Profiles ..."
            value={search}
            onChangeText={setSearch}
            keyboardType="default" // Specify numeric keyboard for phone number
            source={searchIcon.searchIcon}
            toggleImagePress={searchProfiles}
          />
        </View>
        <View style={[appStyles.justifycontentcenter, appStyles.flexrow,]}>
          <View>
            <StatContainer label={'Total Jobs \n    Posted'} source={jobPostIcon.jobPostIcon} noOfJobs={noOfJobs} toggleImagePress={handleTotalJobs} />
          </View>
          <View>
            <StatContainer label={'       Total\n Bookmarked'} source={jobPostIcon.jobPostIcon} noOfJobs={totalSelectedJobs} toggleImagePress={handleTotalBookmarkedJobs} />
          </View>
        </View>
        <View style={[appStyles.justifycontentcenter, appStyles.flexrow,]}>
          <View>
            <StatContainer label={'       Total \n Interviewing'} source={jobPostIcon.jobPostIcon} noOfJobs={totalSelectedJobs} toggleImagePress={handleTotalInterviewing} />
          </View>
          <View>
            <StatContainer label={'Total Selected\n       Jobs'} source={jobPostIcon.jobPostIcon} noOfJobs={'5'} toggleImagePress={handdleTotalSelectedJobs} />
          </View>
        </View>
        <Text style={{ fontSize: fonts.fontsize3, alignSelf: 'center', color: colors.black, marginBottom: sizes.marginbottom1 }}>Top Profiles for you</Text>
        {displayedProfiles.map((profile, index) => (
          <View key={profile.id} style={{ width: responsiveWidth(90), borderRadius: responsiveWidth(5), alignSelf: 'center', marginBottom: responsiveHeight(2) }} >
            <View style={[styles.profileBox]}>
              <View style={styles.rightColumn}>
                <Image source={userImage1} style={styles.profileImage} />
                <Text style={styles.profileName}>{profile.noticeperiod}</Text>
              </View>
              <View style={[styles.leftColumn]}>
                <Text style={{ marginBottom: sizes.marginbottom1 }}>Name: {profile.name}</Text>
                <Text style={{ marginBottom: sizes.marginbottom1 }}>Experienc: {profile.experience}</Text>
                <Text style={{ marginBottom: sizes.marginbottom1 }}>Skills: {profile.skills}</Text>
                <Text style={{ marginBottom: sizes.marginbottom1 }}>Educaiton: {profile.education}</Text>
              </View>
              <View style={{flex:0.7,marginTop:sizes.margintop7}}>
                <View style={{ backgroundColor: 'lightgrey', height: responsiveHeight(5), width: responsiveWidth(25), borderRadius: 20, justifyContent: 'center', alignItems: 'center', }}>
                  <TouchableOpacity onPress={() => handleProfilePress(profile)}>
                    <Text>View Profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

        ))}
      </ScrollView>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  userImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 100,
  },
  menuIcon: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    marginLeft: responsiveWidth(2),
  },
  container: {
    padding: 16,

  },
  profileBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    width: responsiveWidth(90),
    alignSelf: 'center',
    borderRadius: responsiveWidth(5),
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'center',
  },
  rightColumn: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom:responsiveWidth(1),
  },
  profileImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 100,
    marginTop: responsiveHeight(1),
  },

});
