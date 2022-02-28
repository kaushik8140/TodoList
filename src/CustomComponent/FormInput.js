import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
const FormInput = ({
  
  placeholderText,
  backgroundColor,
  image,
  placeholdertextcolor,
  onchange,
}) => {
  return (
    <View>
      <View>
        <Image source={image} />
      </View>
      <TextInput
      
        onChangeText={onchange}
        placeholder={placeholderText}
        placeholderTextColor={placeholdertextcolor}
        
    style={[styles.appButtonText, {backgroundColor}]}
      />
    </View>
  );
};
export default FormInput;

const styles = StyleSheet.create({});