import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Stomach = () => {
  return (
    <View style={styles.container}>
      <Text>Stomach</Text>
    </View>
  );
};

export default Stomach;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
