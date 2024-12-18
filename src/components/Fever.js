/* eslint-disable no-shadow */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {API_URLS} from '../servicess/services';

const FeverScreen = () => {
  const [feverData, setFeverData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(API_URLS.GET_USERS)
      .then(response => {
        setFeverData(response.data);
        setLoading(false);
        console.log('RESPONSE DATA', response.data);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#DF4B38" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const handleItemClick = item => {
    navigation.navigate('FeverDetails', {user: item});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={feverData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => handleItemClick(item)} // Navigate to the details screen
          >
            <Image source={{uri: item.avatar}} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={styles.details}>Username: {item.user.username}</Text>
              <Text style={styles.details}>Email: {item.email}</Text>
              <Text style={styles.details}>Phone: {item.Phone}</Text>
              <Text style={styles.details}>
                Location: {item.location.city}, {item.location.country}
              </Text>
              <Text style={styles.age}>Age: {item.age}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default FeverScreen;

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
  age: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
