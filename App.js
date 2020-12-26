import * as React from 'react';
import { Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomTabNavigator from "./src/TabNavigator";
//importing the pages
import MainTab from './src/MainTab';
//import Discovery from './screens/DiscoveryScreen';
const App = () => {
  return (
    <NavigationContainer>
       <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true}/>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
export default App;