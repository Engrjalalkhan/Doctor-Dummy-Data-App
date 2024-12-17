/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
const DoctorData = [
  {
    id: 1,
    image: require('../assets/images/card.jpg'),
    name: 'Dr. Jhone',
    rating: 4.5,
    discription: 'Dentel',
  },
  {
    id: 2,
    image: require('../assets/images/card1.jpg'),
    name: 'Dr. Smith',
    rating: 5,
    discription: 'Skin',
  },
];
const Card = () => {
  return (
    <View style={styles.container}>
      {DoctorData.map(item => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={{paddingTop: 5, right: 5, fontWeight: 'bold'}}>
              ⭐ {item.rating}
            </Text>
          </View>
          <Text style={styles.discription}>{item.discription}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: 'white',
    width: 180,
    height: 180,
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 5,
    padding: 10,
    // bottom: 180,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  discription: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
});
