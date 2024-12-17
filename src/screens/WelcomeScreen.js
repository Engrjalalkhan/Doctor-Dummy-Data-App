/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import JoinNowButton from '../components/JoinNowButton';
import {useNavigation} from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const HandleSignin = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{width: 100, height: 100}}
        />
        <Text style={styles.headertext}>Palsome</Text>
      </View>
      <Image
        source={require('../assets/images/Onboard.png')}
        style={{resizeMode: 'cover', width: '95%', height: 250, marginTop: 100}}
      />
      <Text style={[styles.headertext, {marginTop: 30}]}>Hello!</Text>
      <Text style={styles.Text}>Welcome to Palsome</Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: 300,
          backgroundColor: '#DF4B38',
          marginTop: 40,
        }}
        onPress={HandleSignin}>
        <Text style={styles.ButtonText}>SIGN IN</Text>
      </TouchableOpacity>
      <JoinNowButton />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
  },
  headertext: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 25,
    left: 10,
  },
  Text: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingTop: 10,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 7,
    fontWeight: 'bold',
  },
});
