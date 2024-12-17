/* eslint-disable no-sparse-arrays */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import Calendar from '../components/Calendar';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [dob, setDob] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    password: '',
    dob: '',
  });
  const [errors, setErrors] = useState({}); // State to track errors for each field
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const showCalendar = () => {
    setCalendarVisible(true);
  };

  const hideCalendar = () => {
    setCalendarVisible(false);
  };

  const handleDateSelection = date => {
    setDob(date);
    setErrors(prev => ({...prev, dob: ''})); // Clear DOB error
  };

  const handleInputChange = (field, value) => {
    // Update the form data
    setFormData(prev => ({...prev, [field]: value}));

    // Remove error message for the field in real-time
    if (value.trim() !== '') {
      setErrors(prev => ({...prev, [field]: ''}));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.gender.trim()) {
      newErrors.gender = 'Gender is required';
    }
    if (!dob.trim()) {
      newErrors.dob = 'Date of birth is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSignup = async () => {
    if (!validateForm()) {
      return;
    } // Prevent submission if there are validation errors

    const {firstName, lastName, email, gender, password} = formData;
    try {
      const userData = {firstName, lastName, email, gender, password, dob};
      const response = await axios.post(
        'http://192.168.18.209:3001/register',
        userData,
      );
      console.log(response.data);
      if (response.data) {
        navigation.navigate('SignIn');
      } else {
        Alert.alert('Sorry', 'Something are missing in the data');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const Goback = () => {
    navigation.navigate('welcome');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={Goback}>
          <Icon name="arrow-left" size={40} />
        </TouchableOpacity>
        <Text
          style={{fontSize: 30, fontWeight: 'bold', left: 30, paddingTop: 20}}>
          Hi!
        </Text>
        <Text style={{fontSize: 25, left: 35, paddingTop: 10}}>
          Create a new account
        </Text>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor={'black'}
          fontSize={18}
          value={formData.firstName}
          onChangeText={text => handleInputChange('firstName', text)}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor={'black'}
          fontSize={18}
          value={formData.lastName}
          onChangeText={text => handleInputChange('lastName', text)}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}

        <TextInput
          style={[styles.input]}
          placeholder="Email"
          placeholderTextColor={'black'}
          fontSize={18}
          value={formData.email}
          onChangeText={text => handleInputChange('email', text)}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={formData.gender}
            style={{height: 50}}
            dropdownIconColor="#DF4B38"
            dropdownIconRippleColor={'#DF4B38'}
            onValueChange={itemValue => handleInputChange('gender', itemValue)}>
            <Picker.Item label="Select Gender" value="" color="gray" />
            <Picker.Item label="Male" value="male" color="gray" />
            <Picker.Item label="Female" value="female" color="gray" />
            <Picker.Item label="Other" value="other" color="gray" />
          </Picker>
        </View>
        {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
        <Text style={{textAlign: 'center', color: 'black'}}>
          _______________________________________________
        </Text>
        <View
          style={{
            flexDirection: 'row',
            left: 35,
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Date of Birth:</Text>
          <TextInput
            style={[
              {
                borderWidth: 1,
                width: '40%',
                borderColor: 'black',
                left: 5,
                paddingHorizontal: 5,
                color: 'black',
              },
              ,
            ]}
            placeholder="MM/DD/YY"
            placeholderTextColor={'gray'}
            fontSize={18}
            value={dob}
            editable={false}
          />
          <TouchableOpacity onPress={showCalendar}>
            <Icon
              name="calendar"
              size={25}
              color={'#DF4B38'}
              style={{left: 20}}
            />
          </TouchableOpacity>
        </View>
        {errors.dob && <Text style={styles.errorText}>{errors.dob}</Text>}
        <Text style={{textAlign: 'center', color: 'black'}}>
          _______________________________________________
        </Text>
        <View style={{position: 'relative'}}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={'black'}
            fontSize={18}
            secureTextEntry={!isPasswordVisible}
            value={formData.password}
            onChangeText={text => handleInputChange('password', text)}
          />
          <TouchableOpacity
            style={styles.passwordIcon}
            onPress={() => setPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? 'eye' : 'eye-slash'}
              size={25}
              color={'#DF4B38'}
            />
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password}</Text>
        )}

        <TouchableOpacity
          style={{
            height: 50,
            width: 300,
            backgroundColor: '#DF4B38',
            marginTop: 10,
            alignSelf: 'center',
          }}
          onPress={handleSignup}>
          <Text style={styles.ButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </ScrollView>

      <Calendar
        visible={isCalendarVisible}
        onClose={hideCalendar}
        onSelectDate={handleDateSelection}
      />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 1,
    paddingTop: 30,
    width: '80%',
    left: 35,
    backgroundColor: 'whitesmoke',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginLeft: 35,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 15,
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
  },
  ButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    paddingTop: 7,
  },
  passwordIcon: {
    position: 'absolute',
    right: 40,
    top: '50%',
  },
});
