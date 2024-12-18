import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const BonData = [
  {
    id: '1',
    name: 'Dr. John Doe',
    image: require('../assets/images/card.jpg'),
    details: 'Orthopedic Surgeon',
    experience: '10 years',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: '2',
    name: 'Dr. Sarah Smith',
    image: require('../assets/images/card.jpg'),
    details: 'Pediatric Orthopedist',
    experience: '8 years',
    rating: 4.8,
    reviews: 95,
  },
  {
    id: '3',
    name: 'Dr. Emily White',
    image: require('../assets/images/card.jpg'),
    details: 'Orthopedic Specialist',
    experience: '12 years',
    rating: 4.2,
    reviews: 60,
  },
];

const BoneScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {BonData.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => navigation.navigate('BoneDetails', {doctor: item})}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.details}>{item.details}</Text>
              <Text style={styles.experience}>
                Experience: {item.experience}
              </Text>
              <Text style={styles.rating}>
                Rating: {item.rating} ({item.reviews} reviews)
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  experience: {
    fontSize: 14,
    color: '#555',
  },
  rating: {
    fontSize: 14,
    color: '#ff9800',
    marginTop: 5,
  },
});
