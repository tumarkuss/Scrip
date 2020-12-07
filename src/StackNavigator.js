import React, { useRef } from "react";
import {
  SafeAreaView,
  Button,
  Text,
  TextInput,
  StyleSheet,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import MainTab from "./MainTab";
import CardList from "./CardList";
import Notifications from "./Notifications";
import Profile from "./ProfilePage";

const Stack = createStackNavigator();


const HomeNavigator = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen  name="MainTab" component={MainTab}
    options={() => 
  ({
      headerShown:true,
  })
  }/>
    <Stack.Screen  name="CardList" component={CardList} 
    options={() => 
  ({
    headerBackTitleVisible:false,
    headerTitle:false,
    headerTransparent:true,
    headerTintColor:'#fff',
  })
  }
    />
  </Stack.Navigator>
);
};

const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="MainTab" component={MainTab} 
        />
      </Stack.Navigator>
    );
  };
  export { HomeNavigator, ContactStackNavigator };