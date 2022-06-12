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
const { width, height } = Dimensions.get('window');
const GradientCard = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
      }}
      colors={['#616161', '#9bc5c3']}>
      {props.children}
    </LinearGradient>
  );
};

export default GradientCard;
