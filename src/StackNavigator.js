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
import Favorites from "./Favorites";

const Stack = createStackNavigator();


const HomeNavigator = () => {
  return(
  <Stack.Navigator >
    <Stack.Screen  name="MainTab" component={MainTab}
    options={() => 
  ({
      headerShown:true
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

const FavoritesNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Favorites" component={Favorites} 
      />
    </Stack.Navigator>
  );
};

const NotificationsNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Notifications" component={Notifications} 
        />
      </Stack.Navigator>
    );
  };

  const ProfileNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="Profile" component={ProfilePage} 
        />
      </Stack.Navigator>
    );
  };
  export { HomeNavigator, FavoritesNavigator, NotificationsNavigator, ProfileNavigator };
