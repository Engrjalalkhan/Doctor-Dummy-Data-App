import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkLoginstatus = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        navigation.navigate('Home');
      } else {
        const timer = setTimeout(() => {
          navigation.replace('welcome');
        }, 3000);

        return () => clearTimeout(timer);
      }
    };
    checkLoginstatus();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
