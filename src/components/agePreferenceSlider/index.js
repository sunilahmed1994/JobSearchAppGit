// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';
// import LinearGradient from 'react-native-linear-gradient';
// import { appStyles } from '../../services/utilities/appstyle';
// import { responsiveWidth } from 'react-native-responsive-dimensions';
// class AgePreferenceSlider extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       values: [18, 60],
//     };
//   }

//   render() {
//     return (
//       <View style={[{ flex: 1, padding: 20 }, appStyles.dropdownlarge, appStyles.justifycontentcenter, appStyles.alignitemcenter]}>
//         {/* <Text>
//           Age Preference: {Math.round(this.state.values[0])} - {Math.round(this.state.values[1])}
//         </Text> */}
//         <MultiSlider
//           values={this.state.values}
//           sliderLength={300} // Adjust the length as needed
//           onValuesChange={(values) => this.setState({ values })}
//           min={18}
//           max={60}
//           trackStyle={{
//             height: 10, // Adjust the height of the track
//             // backgroundColor: 'gray', // Change the background color of the track
//             borderColor: 'red',
//             borderWidth:1,
//             borderRadius:responsiveWidth(10),
//           }}

//         >
//           <LinearGradient // Linear gradient for selectedStyle
//             colors={['#C43B4E', '#629CD0']}
//             start={{ x: 1, y: 0 }}
//             end={{ x: 1, y: 1 }}
//             style={{ flex: 1 }}
//           >
//             <View />
//           </LinearGradient>
//         </MultiSlider>
//       </View>
//     );
//   }
// }

// export default AgePreferenceSlider;

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { appStyles } from '../../services/utilities/appstyle';

class AgePreferenceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [18, 60],
    };
  }

  render() {
    const [minValue, maxValue] = this.state.values;
    const totalRange = 60 - 18;
    const selectedWidth = ((maxValue - minValue) / totalRange) * 100;

    return (
      <View style={[{ flex: 1 },appStyles.dropdownlarge,appStyles.alignitemcenter]}>
        <MultiSlider
          values={this.state.values}
          sliderLength={300}
          onValuesChange={(values) => this.setState({ values })}
          min={18}
          max={60}
          trackStyle={{
            height: 10,
            backgroundColor: "#EEF1F4", // Set track background color
            borderColor: '#C33B4F', // Set track border color
            borderWidth: 1,
            borderRadius: responsiveWidth(10),
          }}
          selectedStyle={{
            backgroundColor: ['#C43B4E', '#629CD0'], // Set selected area background color to transparent
          }}
          customMarker={(e) => {
            return (
              <View style={[{ width: 25, height: 25, borderRadius: 100, borderWidth: 4, borderColor: '#C43B4E', backgroundColor: 'white' }]}>
                <LinearGradient
                  colors={['white', 'white']}
                  style={{ flex: 1, borderRadius: 100, }}
                >
                  <Text style={{ color: 'black', textAlign: 'center', marginTop: -22 }}>{Math.round(e.currentValue)}</Text>
                </LinearGradient>
              </View>
            );
          }}
        />
        {/* <Text>
          Age Preference: {Math.round(this.state.values[0])} - {Math.round(this.state.values[1])}
        </Text> */}
      </View>
    );
  }
}

export default AgePreferenceSlider;

