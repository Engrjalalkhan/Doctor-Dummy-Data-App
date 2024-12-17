/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  // ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios'; // Import axios for API calls
// import AsyncStorage from '@react-native-async-storage/async-storage';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State for showing/hiding password
  const [emailError, setEmailError] = useState(''); // State to store email error message
  const [passwordError, setPasswordError] = useState(''); // State to store password error message
  // const [isloading, setIsloading] = useState(false); // State for API error messages

  const Goback = () => {
    navigation.navigate('welcome');
  };

  const handleInputChange = (field, value) => {
    if (field === 'email') {
      setEmail(value);
      if (value.trim() !== '') {
        setEmailError('');
      }
    } else if (field === 'password') {
      setPassword(value);
      if (value.trim() !== '') {
        setPasswordError('');
      }
    }
  };

  const handleSignIn = async () => {
    let valid = true;

    setEmailError('');
    setPasswordError('');
    // setIsloading(true);

    if (email.trim() === '') {
      setEmailError('Please enter your email');
      valid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Please enter your password');
      valid = false;
    }

    if (!valid) {
      // setIsloading(false);
      return;
    }

    try {
      const userData = {email, password};
      // Replace with your API URL
      const apiUrl = 'http://192.168.18.209:3001/login-user';

      const response = await axios.post(apiUrl, userData);
      console.log('============', response.data);
      if (response.data.status == 'success') {
        // await AsyncStorage.setItem('userToken',response.data.token);
        navigation.navigate('Home');
      } else {
        Alert.alert('Sorry', 'Invalid token');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
    // finally{
    //   setIsloading(false);
    // }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={Goback}>
          <Icon name="arrow-left" size={40} />
        </TouchableOpacity>

        <Text
          style={{fontSize: 35, fontWeight: 'bold', left: 30, paddingTop: 20}}>
          Welcome!
        </Text>
        <Text
          style={{fontSize: 20, fontWeight: 'bold', left: 35, paddingTop: 10}}>
          Sign in to continue
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={'black'}
          fontSize={18}
          value={email}
          onChangeText={text => handleInputChange('email', text)}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'black'}
            fontSize={18}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={text => handleInputChange('password', text)}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.iconContainer}>
            <Icon
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
              size={24}
              color="#DF4B38"
            />
          </TouchableOpacity>
        </View>
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          {/* {isloading ? (
          <ActivityIndicator size={'small'} color={'#DF4B38'}/>
        ) : ()} */}
          <Text style={styles.ButtonText}>SIGN IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
          <Text style={styles.Text}>Forget Password?</Text>
        </TouchableOpacity>

        <View
          style={{flexDirection: 'row', paddingTop: 50, alignSelf: 'center'}}>
          <Text style={[styles.Text, {color: '#000'}]}>New to Palsome?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.Text, {color: '#DF4B38'}]}> Join Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 1.5,
    marginTop: 80,
    width: '80%',
    borderColor: 'black',
    left: 35,
    paddingRight: 40,
  },
  passwordContainer: {
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 40,
    top: 80,
    padding: 10,
  },
  Text: {
    fontSize: 20,
    marginTop: 15,
    color: 'Darkgray',
    fontWeight: '455',
    alignSelf: 'center',
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 7,
  },
  signInButton: {
    height: 50,
    width: 300,
    backgroundColor: '#DF4B38',
    marginTop: 40,
    alignSelf: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
    left: 35,
  },
});
