import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SingUpScreen from '../screens/SingUpScreen';
import ForgetScreen from '../screens/ForgetScreen';
import HomeScreen from '../screens/HomeScreen';
import MainScreen from '../screens/MainScreen';
import BottomTab from '../navigations/BottomTab';
import DetailScreen from '../screens/DetailScreen';
import Fever from '../components/Fever';
import Cough from '../components/Cough';
import Stomach from '../components/Stomach';
import Bon from '../components/Bon';
import Allergy from '../components/Allergy';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SingUpScreen} />
        <Stack.Screen name="Forget" component={ForgetScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Fever" component={Fever} />
        <Stack.Screen name="Cough" component={Cough} />
        <Stack.Screen name="Stomach" component={Stomach} />
        <Stack.Screen name="Bon" component={Bon} />
        <Stack.Screen name="Allergy" component={Allergy} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;