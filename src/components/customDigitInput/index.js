import React,{useRef,useEffect} from 'react'
import { TextInput, View } from 'react-native'
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
import { sizes } from '../../services/utilities/sizes';

const CustomDigitInput = ({ value, onChange, nextRef }) => {

  const inputRef = useRef(null);
  // Focus the input when it's mounted
  useEffect(() => {
    if (nextRef) {
      nextRef.current = inputRef.current;
    }
    if (inputRef.current && value !== '') {
      inputRef.current.focus();
    }
  }, [value, nextRef]);

  return (
    <TextInput
      style={{ width: responsiveWidth(11), height: responsiveHeight(8), borderWidth: 1, textAlign: 'center', borderRadius:responsiveWidth(4), marginLeft:sizes.marginleft15,marginRight:sizes.marginright15 }}
      keyboardType="numeric"
      maxLength={1}
      value={value}
      onChangeText={onChange}
      ref={inputRef}
      
    />
  );
};

export default CustomDigitInput;
