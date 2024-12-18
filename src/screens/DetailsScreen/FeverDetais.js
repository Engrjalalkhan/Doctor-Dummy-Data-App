/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-dupe-keys */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const DetailsScreen = ({route}) => {
  const {user} = route.params;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>{'< '}</Text>
        </TouchableOpacity>

        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {user.first_name} {user.last_name}
          </Text>
        </View>
      </View>
      <Image source={{uri: user.avatar}} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsLabel}>Username:</Text>
        <Text style={styles.detailsValue}>{user.user.username}</Text>
        <Text style={styles.detailsLabel}>Email:</Text>
        <Text style={styles.detailsValue}>{user.email}</Text>
        <Text style={styles.detailsLabel}>Phone:</Text>
        <Text style={styles.detailsValue}>{user.Phone}</Text>
        <Text style={styles.detailsLabel}>Location:</Text>
        <Text style={styles.detailsValue}>
          {user.location.city}, {user.location.country}
        </Text>
        <Text style={styles.detailsLabel}>Age:</Text>
        <Text style={styles.detailsValue}>{user.age}</Text>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  backText: {
    fontSize: 18,
    color: 'black',
    fontSize: 40,
    top: 48,
    right: 80,
  },
  nameContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
    marginBottom: 20,
  },
  detailsContainer: {
    width: '100%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  detailsValue: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
});
