import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import api from '../api/api';

const IntroScreen = props => {
  const [data, setData] = useState();
  const {width, height} = Dimensions.get('window');
  useEffect(() => {
    const calltoapi = async () => {
      const res = await api.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/massacre',
      );
      console.log(res.data);
      res && setData(res.data[0]);
    };
    calltoapi();
  }, []);
  console.log(data);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={'gray'} />
      <ImageBackground
        style={{
          flex: 1,
        }}
        source={require('../assets/images/Intro-background.jpg')}>
        <View
          style={{
            marginTop: height * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            adjustsFontSizeToFit={true}
            style={{
              color: 'black',

              fontSize: 50,

              fontFamily: 'Halmera',
            }}>
            Welcome
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            style={{
              color: 'black',
              fontSize: 50,
              // fontWeight: 'bold', ///setting this removes custom fault
              fontFamily: 'Halmera',
            }}>
            to
          </Text>
          <Text
            adjustsFontSizeToFit={true}
            style={{
              color: 'black',
              fontSize: 60,

              fontFamily: 'Halmera',
            }}>
            WordBook-Plus
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Search')}
          style={{
            position: 'absolute',
            top: height * 0.4,
            marginTop: 20,
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: 10,
            alignSelf: 'center',
            paddingHorizontal: 20,
            justifyContent: 'center',
            borderColor: 'white',
            backgroundColor: 'rgba(225,225,225,1)',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 40,
              textAlign: 'center',
              fontFamily: 'Halmera',
              paddingTop: 6,
            }}>
            Search
          </Text>
        </TouchableOpacity>
        {/* {data && (
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={{
              height: Dimensions.get('window').height * 0.3,
              borderRadius: 20,
              margin: 10,
            }}
            colors={['#616161', '#9bc5c3']}>
            <View
              style={{
                margin: 10,
              }}>
              <Text
                style={{
                  fontSize: 80,
                }}>
                {data.word}
              </Text>
              <Text
                style={{
                  fontSize: 30,
                }}>
                {data.phonetic}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}>
                {data.origin}
              </Text>
            </View>
          </LinearGradient>
        )} */}
        {/* <View>
          {
              data.meanings.map((item)=>{

              })
          }
      </View> */}
      </ImageBackground>
    </View>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    // flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default IntroScreen;
