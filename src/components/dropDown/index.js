import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { appStyles } from '../../services/utilities/appstyle';

const CustomDropdown = ({ label, value, options, onSelect,styleDropDown }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:responsiveWidth(1)}}>{label}</Text>
      <TouchableOpacity
        style={styleDropDown}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text>{value || 'Select'}</Text>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.options}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              style={styles.option}
              onPress={() => {
                onSelect(option.value);
                setIsOpen(false);
              }}
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
   
  },
  // dropdown: {
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   padding: 13,
  //   width:responsiveWidth(30),
  //   height:responsiveHeight(7.5),
  //   borderRadius:responsiveWidth(4),
  // },
  options: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius:10,
  },
  option: {
    padding: 10,
    borderColor: 'gray',
    // borderBottomWidth: 1,
  },
});

export default CustomDropdown;
