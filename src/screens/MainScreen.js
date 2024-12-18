/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeverScreen from '../components/Fever';
import CoughScreen from '../components/Cough';
import Stomach from '../components/Stomach';
import Bon from '../components/Bon';
import Allergy from '../components/Allergy';
import Card from '../components/Card';
import FlatCard from '../components/FlatCard';

const textItems = [
  {icon: '🔥', name: 'All', screen: 'MainScreen'},
  {icon: '🤒', name: 'Fever', screen: 'Fever'},
  {icon: '🤧', name: 'Cough', screen: 'Cough'},
  {icon: '🤢', name: 'Stomach', screen: 'Stomach'},
  {icon: '🦴', name: 'Bone', screen: 'Bone'},
  {icon: '🌸', name: 'Allergy', screen: 'Allergy'},
];

const MainScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePress = index => {
    setSelectedIndex(index);
  };

  const renderContent = () => {
    switch (textItems[selectedIndex].screen) {
      case 'Fever':
        return <FeverScreen />;
      case 'Cough':
        return <CoughScreen />;
      case 'Stomach':
        return <Stomach />;
      case 'Bone':
        return <Bon />;
      case 'Allergy':
        return <Allergy />;
      default:
        return (
          <>
            <View style={styles.sectionContainer}>
              <Text style={{fontSize: 20, color: 'black'}}>
                Favorite Doctor
              </Text>
              <TouchableOpacity>
                <Text style={{fontSize: 18, color: 'blue'}}>see all</Text>
              </TouchableOpacity>
            </View>
            <Card />
            <View style={styles.sectionContainer}>
              <Text style={{fontSize: 20, color: 'black'}}>Top Doctor</Text>
              <TouchableOpacity>
                <Text style={{fontSize: 18, color: 'blue'}}>see all</Text>
              </TouchableOpacity>
            </View>
            <FlatCard />
          </>
        );
    }
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container} behavior="height" enabled={false}>
        <View style={{backgroundColor: '#DF4B38', height: 250}}>
          <View style={styles.Header}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/background.png')}
                style={styles.profile}
              />
            </TouchableOpacity>
            <View style={{left: 20}}>
              <Text style={styles.txt}>Hello, welcome 🎉</Text>
              <Text style={styles.text}>Dr. Jhone</Text>
            </View>
            <TouchableOpacity>
              <Icon
                name="bell"
                size={20}
                color="white"
                style={{left: 180, paddingTop: 15}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 15,
              alignSelf: 'center',
              borderColor: 'white',
              width: '92%',
              marginTop: 50,
            }}>
            <TouchableOpacity>
              <Icon
                name="search"
                size={25}
                color={'white'}
                style={{padding: 20}}
              />
            </TouchableOpacity>

            <TextInput
              placeholder="Search Doctor..."
              placeholderTextColor={'white'}
              left={10}
            />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          {textItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.button,
                selectedIndex === index && styles.selectedButton,
              ]}
              onPress={() => handlePress(index)}>
              <Text
                style={[
                  styles.text,
                  selectedIndex === index
                    ? styles.selectedText
                    : styles.defaultText,
                ]}>
                {item.icon} {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        {renderContent()}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flexDirection: 'row',
    paddingTop: 50,
    paddingLeft: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  txt: {
    fontSize: 16,
    color: 'white',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  scrollContainer: {
    height: 45,
    marginTop: 10,
    left: 5,
  },
  button: {
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#d1d1d1',
    borderRadius: 10,
    alignSelf: 'center',
  },
  selectedButton: {
    backgroundColor: '#DF4B38',
  },
  selectedText: {
    color: '#fff',
  },
  defaultText: {
    color: '#808080',
  },
  sectionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
