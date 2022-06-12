import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FIcon from 'react-native-vector-icons/FontAwesome';
const { width, height } = Dimensions.get('window');

const SearchBar = ({ input, setInput, submit }) => {
  return (
    <View style={styles.searchBar}>
      <FIcon style={styles.icon} name="search" size={25} />
      <TextInput
        style={styles.textInput}
        value={input}
        onChangeText={setInput}
        placeholder="Search"
        onEndEditing={() => submit(input)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchBar: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: -10,
    zIndex: 1,
    borderWidth: 2,
    borderColor: '#616161',
  },
  icon: {
    borderRadius: 15,
    alignSelf: 'center',
    marginLeft: 5,
    paddingHorizontal: 5,
  },
  textInput: {
    height: 45,
    backgroundColor: 'white',
    borderRadius: 15,
    flex: 1,
    fontSize: 18,
  },
});
export default SearchBar;
