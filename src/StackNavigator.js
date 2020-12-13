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
import Cardtwo from "./Cardtwo";
import Notifications from "./Notifications";
import Rest from "./Rest";
import ProfilePage from "./ProfilePage";

const Stack = createStackNavigator();


const HomeNavigator = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen  name="MainTab" component={MainTab}
    options={() => 
  ({
      headerShown:false
  })
  }/>
    <Stack.Screen name="Rest" component = {Rest}/>
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
    <Stack.Screen name="Cardtwo" component={Cardtwo}
    options={() => 
      ({
        headerBackTitleVisible:false,
        headerTitle:false,
        headerTransparent:true,
        headerTintColor:'#fff',
      })
      }/>
  </Stack.Navigator>
);
};

const ContactStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Notifications" component={Notifications} 
        />
      </Stack.Navigator>
    );
  };

  const Profile = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Profile" component={ProfilePage} 
        />
      </Stack.Navigator>
    );
  };
  export { HomeNavigator, ContactStackNavigator,Profile };