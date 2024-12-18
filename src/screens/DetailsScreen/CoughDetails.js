import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const CoughDetailsScreen = ({route}) => {
  const {doctor} = route.params;

  return (
    <View style={styles.container}>
      <Image source={doctor.image} style={styles.image} />
      <Text style={styles.name}>{doctor.name}</Text>
      <Text style={styles.details}>{doctor.details}</Text>
      <Text style={styles.experience}>Experience: {doctor.experience}</Text>
      <Text style={styles.rating}>
        Rating: {doctor.rating} ({doctor.reviews} reviews)
      </Text>
    </View>
  );
};

export default CoughDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  experience: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
    color: '#ff9800',
    marginTop: 5,
  },
});
