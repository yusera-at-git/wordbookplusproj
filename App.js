import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import IntroScreen from './src/screens/IntroScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Search from './src/screens/Search';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={IntroScreen}
        name="IntroScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Search}
        name="Search"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
