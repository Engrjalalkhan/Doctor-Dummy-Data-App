/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ForgetScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.Text}>Verify Account</Text>
        <Text style={styles.txt}>Thank you for registration.</Text>
        <Text style={styles.text}>
          Please enter your OTP below, and press Continue.
        </Text>
        <TextInput
          placeholder="Enter OTP"
          placeholderTextColor={'black'}
          fontSize={18}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => console.log('Resend OTP Clicked')}>
          <Text style={styles.ResendOTP}>Resend OTP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: 300,
            backgroundColor: '#DF4B38',
            marginTop: 40,
            alignSelf: 'center',
          }}
          onPress={() => console.log('Continue clicked')}>
          <Text style={styles.ButtonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ForgetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: 'white',
  },
  Text: {
    fontSize: 40,
    fontWeight: 'bold',
    left: 40,
  },
  txt: {
    fontSize: 30,
    left: 45,
    marginTop: 30,
    color: '#DF4B38',
  },
  text: {
    fontSize: 18,
    left: 20,
    padding: 30,
    textAlign: 'auto',
    numberofline: 2,
    marginTop: 40,
    color: 'black',
    fontWeight: '500',
  },
  input: {
    borderBottomWidth: 1.5,
    marginTop: 40,
    width: '70%',
    borderColor: 'black',
    left: 55,
  },
  ResendOTP: {
    textAlign: 'right',
    right: 65,
    paddingTop: 10,
    color: 'blue',
    fontWeight: '800',
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 7,
    fontWeight: 'bold',
  },
});
