import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  StatusBar,
  ScrollView,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import api from '../api/api';
import FIcon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import GradientCard from '../components/GradientCard';
import Sound from 'react-native-sound';
const { width, height } = Dimensions.get('window');

const Search = props => {
  const [data, setData] = useState();
  const [antonyms, setAntonyms] = useState([]);
  const [definitions, setDefinitions] = useState([]);
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [synonyms, setSynonyms] = useState([]);
  const [phonetics, setPhonetics] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    const calltoapi = async () => {
      // try {
      //   const res = await api.get(
      //     `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`,
      //   );
      //   console.log(res.data);
      //   if (res) {
      //     setData(res.data[0]);
      //     setAntonyms(res.data[0].meanings[0].antonyms);
      //     setDefinitions(res.data[0].meanings[0].definitions);
      //     setPartOfSpeech(res.data[0].meanings[0].partOfSpeech);
      //     setSynonyms(res.data[0].meanings[0].synonyms);
      //     setPhonetics(res.data[0].phonetics);
      //     setError(null);
      //   }
      // } catch (e) {
      //   console.log(e.response.data);
      //   setError(e.response.data);
      // }
    };
    calltoapi();
  }, []);
  console.log(antonyms, synonyms, phonetics);
  const submit = async inp => {
    try {
      const res = await api.get(`/v2/entries/en/${inp}`);
      console.log(res.data);
      if (res) {
        setData(res.data[0]);
        setAntonyms(res.data[0].meanings[0].antonyms);
        setDefinitions(res.data[0].meanings[0].definitions);
        setPartOfSpeech(res.data[0].meanings[0].partOfSpeech);
        setSynonyms(res.data[0].meanings[0].synonyms);
        setPhonetics(res.data[0].phonetics);
        setError(null);
      }
    } catch (e) {
      console.log(e.response.data);
      setError(e.response.data);
    }
  };
  const playSound = snd => {
    console.log(phonetics + ' insideeee');
    var s = new Sound(snd, '', (error, sd) => {
      if (error) {
        alert('err ' + error.message);
        return;
      }
      s.play(() => {
        s.release();
      });
    });
  };
  return (
    <ScrollView
      // stickyHeaderIndices={[1]}
      style={{
        flex: 1,
      }}>
      <StatusBar backgroundColor={'#616161'} />
      <Header input={input} setInput={setInput} submit={submit} />
      {error ? (
        <GradientCard>
          <View
            style={{
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'MightyKingdom',
              }}>
              Oops!!
            </Text>
          </View>
          <View
            style={{
              margin: 10,
              marginVertical: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
              }}>
              {error.title}
            </Text>
            <View
              style={{
                margin: 20,
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 20,
                }}>
                {error.message}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                }}>
                {error.resolution}
              </Text>
            </View>
          </View>
        </GradientCard>
      ) : (
        <>
          {data && (
            <GradientCard>
              <View
                style={{
                  margin: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                  }}>
                  <Text
                    style={{
                      fontSize: data.word.length > 12 ? 40 : 60,

                      marginBottom: 0,
                    }}>
                    {data.word}
                  </Text>
                  {phonetics.length > 0 && (
                    <View>
                      {phonetics.map(item => {
                        return item.audio !== '' ? (
                          <TouchableOpacity
                            style={{}}
                            onPress={() => playSound(item.audio)}>
                            <Text>Play sound</Text>
                          </TouchableOpacity>
                        ) : null;
                      })}
                    </View>
                  )}
                </View>
                <View
                  style={{
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                    }}>
                    {partOfSpeech}
                  </Text>
                  <Text
                    style={{
                      fontSize: 30,
                    }}>
                    {data.phonetic}
                  </Text>

                  <Text
                    style={{
                      fontSize: 10,
                    }}>
                    {data.origin}
                  </Text>
                </View>
              </View>
            </GradientCard>
          )}
          {definitions.length > 0 && (
            <GradientCard>
              <View
                style={{
                  margin: 10,
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                  }}>
                  DEFINITIONS:
                </Text>
                {definitions.map(item => {
                  return (
                    <Text
                      style={{
                        fontSize: 18,
                      }}>
                      {item.definition}
                    </Text>
                  );
                })}
              </View>
            </GradientCard>
          )}
          {antonyms.length > 0 && (
            <GradientCard>
              <View
                style={{
                  margin: 10,
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                  }}>
                  ANTONYMS:
                </Text>
                {antonyms.map((item, index) => {
                  return (
                    <Text
                      style={{
                        fontSize: 18,
                      }}
                      key={index}>
                      {item}
                    </Text>
                  );
                })}
              </View>
            </GradientCard>
          )}
          {synonyms.length > 0 && (
            <GradientCard>
              <View
                style={{
                  margin: 10,
                  marginVertical: 20,
                }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                  }}>
                  SYNONYMS:
                </Text>
                {synonyms.map((item, index) => {
                  return (
                    <Text
                      style={{
                        fontSize: 18,
                      }}
                      key={index}>
                      {item}
                    </Text>
                  );
                })}
              </View>
            </GradientCard>
          )}
        </>
      )}
    </ScrollView>
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
export default Search;
