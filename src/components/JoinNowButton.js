/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
const JoinNowButton = () => {
  const navigation = useNavigation();
  const HandleSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={{
          height: 50,
          width: 300,
          marginTop: 20,
          borderWidth: 2,
          borderColor: '#DF4B38',
        }}
        onPress={HandleSignUp}>
        <Text style={[styles.ButtonText, {color: '#000'}]}>JOIN NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default JoinNowButton;

const styles = StyleSheet.create({
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 7,
    fontWeight: 'bold',
  },
});
