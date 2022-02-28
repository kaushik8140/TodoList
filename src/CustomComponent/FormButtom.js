import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
const FormButton = ({onPress, title, backgroundColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, {backgroundColor}]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};
export default FormButton;

const styles = StyleSheet.create({
  appButtonContainer: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    // textTransform: 'uppercase',
  },
});