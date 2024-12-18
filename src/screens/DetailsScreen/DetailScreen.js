/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const DetailData = [
  {
    id: 1,
    image: require('..//../assets/images/card.jpg'),
    name: 'Dr. Jhone',
    rating: 4.5,
    discription: 'Dental Specialist | Surgeon',
    review: '(332 reviews)',
  },
];

const DetailScreen = () => {
  const navigation = useNavigation();
  const Goback = () => {
    navigation.navigate('BottomTab');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={Goback}>
          <Icon
            name="arrow-left"
            size={20}
            color="black"
            style={{paddingLeft: 40}}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
            fontWeight: 'bold',
            paddingRight: 150,
          }}>
          DetailScreen
        </Text>
      </View>

      {DetailData.map(item => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rating}>
              ⭐ {item.rating} {item.review}
            </Text>
          </View>
          <Text style={styles.discription}>{item.discription}</Text>
        </TouchableOpacity>
      ))}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingTop: 50,
        }}>
        <View style={{alignItems: 'center'}}>
          <Icon name="users" size={25} color="#DF4B38" />
          <Text style={styles.txt}>120 +</Text>
          <Text>Patients</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Icon name="line-chart" size={25} color="#DF4B38" />
          <Text style={styles.txt}>7 +</Text>
          <Text>Years Exp</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Icon name="star" size={25} color="#DF4B38" />
          <Text style={styles.txt}>4.5</Text>
          <Text>Rating</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Icon name="envelope" size={25} color="#DF4B38" />
          <Text style={styles.txt}>300 +</Text>
          <Text>Reviews</Text>
        </View>
      </View>

      <View style={{padding: 35}}>
        <Text style={styles.heading}>About me</Text>
        <Text style={styles.body}>
          Hello, I’m Dr. John, a dedicated and passionate dental surgeon with a
          commitment to providing exceptional oral care. With years of
          experience in both general dentistry{' '}
          <Text style={{color: 'blue'}}>Read More...</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Icon
          name="phone"
          size={25}
          color="white"
          style={{top: 20, paddingLeft: 40}}
        />
        <Text style={styles.buttontext}>Voice Call (14.30-15.00PM)</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
  },
  card: {
    backgroundColor: 'white',
    width: 350,
    height: 350,
    marginHorizontal: 5,
    borderRadius: 15,
    elevation: 2,
    padding: 10,
    marginTop: 50,
    alignSelf: 'center',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 10,
  },
  discription: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
  rating: {
    fontSize: 14,
    color: 'black',
    paddingTop: 20,
    right: 10,
  },
  txt: {
    marginTop: 10,
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
  },
  body: {
    fontSize: 16,
    color: 'gray',
  },
  button: {
    height: 60,
    backgroundColor: '#DF4B38',
    marginBottom: 50,
    width: '85%',
    alignSelf: 'center',
    borderRadius: 15,
  },
  buttontext: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    bottom: 7,
  },
});
