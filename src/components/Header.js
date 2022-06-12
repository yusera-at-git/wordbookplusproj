import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SearchBar from './SearchBar';
const { width, height } = Dimensions.get('window');

const Header = ({ input, setInput, submit }) => {
  return (
    <>
      <View style={styles.header}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>WordBook-Plus</Text>
        </View>
      </View>
      <SearchBar input={input} setInput={setInput} submit={submit} />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    borderColor: 'white',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: height * 0.15,
    backgroundColor: '#616161',
  },
  wrapper: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 70,
    fontFamily: 'Halmera',
  },
});
export default Header;
