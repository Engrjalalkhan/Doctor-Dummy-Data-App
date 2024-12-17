/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const data = [
  {
    heading: 'More Comfortable Chat With the Doctor',
    body: 'Book an appointment with the doctor. Chat with the doctor via appointment letter and get consultation.',
  },
  {
    heading: 'Get Expert Advice',
    body: 'Connect with top doctors and receive medical advice from the comfort of your home.',
  },
  {
    heading: '24/7 Support',
    body: 'Access medical care at any time, anywhere, with our round-the-clock support.',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderItem = ({item}) => (
    <View style={styles.carouselContent}>
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  const onScroll = Animated.event(
    [{nativeEvent: {contentOffset: {x: scrollX}}}],
    {useNativeDriver: false},
  );

  const onMomentumScrollEnd = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / 400); // Adjust width if necessary
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={{width: 450, height: 600}}>
        <View style={styles.modal}>
          <Animated.FlatList
            data={data}
            horizontal
            pagingEnabled
            onScroll={onScroll}
            onMomentumScrollEnd={onMomentumScrollEnd}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.carousel}
          />
          <View style={styles.dotContainer}>
            {data.map((_, index) => {
              const inputRange = [
                (index - 1) * 400,
                index * 400,
                (index + 1) * 400,
              ];

              const dotWidth = scrollX.interpolate({
                inputRange,
                outputRange: [12, 20, 12],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  key={index}
                  style={[
                    styles.dot,
                    {
                      width: dotWidth,
                      backgroundColor:
                        index === currentIndex ? '#DF4B38' : 'gray',
                    },
                  ]}
                />
              );
            })}
          </View>
          <TouchableOpacity style={styles.Button} onPress={()=>navigation.navigate('BottomTab')}>
            <Text style={styles.buttontext}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  modal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: '50%',
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: 450,
  },
  carouselContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 415,
    padding: 50,
  },
  heading: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 12,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  Button: {
    width: '80%',
    height: 60,
    backgroundColor: '#DF4B38',
    borderRadius: 15,
    marginTop: 20,
  },
  buttontext: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
    paddingTop: 15,
  },
});
