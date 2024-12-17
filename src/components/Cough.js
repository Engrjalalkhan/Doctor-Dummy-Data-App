import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const CoughData = [
  {
    id: '1',
    name: 'Dr. James Wilson',
    image: require('../assets/images/card1.jpg'),
    details: 'Pulmonologist specializing in Cough',
    experience: '15 years',
    rating: 4.7,
    reviews: 140,
  },
  {
    id: '2',
    name: 'Dr. Anna Brown',
    image: require('..//assets/images/card1.jpg'),
    details: 'Expert in Respiratory Issues',
    experience: '9 years',
    rating: 4.6,
    reviews: 100,
  },
];

const CoughScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={CoughData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.card}>
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
        )}
      />
    </View>
  );
};

export default CoughScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
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
