/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MainScreen from '../screens/MainScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessageScreen';
import {TouchableOpacity, View} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'MainScreen') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Appointment') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user' : 'user';
          } else if (route.name === 'Messages') {
            iconName = focused ? 'envelope' : 'envelope';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#DF4B38', // Set active tab color to #DF4B38
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarItemStyle: {
          position: 'relative',
        },
        tabBarButton: props => {
          const {children, accessibilityState, ...otherProps} = props;
          return (
            <React.Fragment>
              <View
                style={[
                  {
                    position: 'absolute',
                    top: 0,
                    left: 10,
                    right: 10,
                    height: 3,
                    backgroundColor: accessibilityState.selected
                      ? '#DF4B38'
                      : 'transparent',
                  },
                ]}
              />
              <TouchableOpacity {...otherProps}>{children}</TouchableOpacity>
            </React.Fragment>
          );
        },
      })}>
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="Appointment" component={AppointmentScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default App;
