import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AppointmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Appointment Screen</Text>
    </View>
  );
};

export default AppointmentScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
