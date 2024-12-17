/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const DoctorProfile = [
  {
    id: 1,
    image: require('../assets/images/card.jpg'),
    name: 'Dr. Jhone',
    rating: 4.5,
    discription: 'Dentel expert | FCPS',
    review: '(332 reviews)',
  },
];
const Card = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {DoctorProfile.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection: 'row'}}>
            <Image source={item.image} style={styles.image} />
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.name}>{item.name}</Text>
              <Icon
                name="ellipsis-h"
                size={25}
                color="gray"
                style={{marginTop: 7, left: 90}}
              />
            </View>
            <Text style={styles.discription}>{item.discription}</Text>
            <Text style={[styles.rating, {fontWeight: 'bold'}]}>
              ⭐ {item.rating}
            </Text>
            <Text style={styles.rating}> {item.review}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    width: 380,
    height: 180,
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    bottom: 15,
    alignSelf: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  discription: {
    fontSize: 14,
    color: 'black',
    paddingTop: 30,
    right: 87,
  },
  rating: {
    fontSize: 14,
    color: 'black',
    paddingTop: 100,
    right: 210,
  },
});
