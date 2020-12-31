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
import Reservation from "./Reservation";
import MainTab from "./MainTab";
import CardList from "./CardList";
import Cardtwo from "./Cardtwo";
import Notifications from "./Notifications";
import Rest from "./Rest";
import ProfilePage from "./ProfilePage";
import Favorites from "./Favorites";
import Register from './Register';
import Gallery from "./Gallery";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


const Stack = createStackNavigator();



const HomeNavigator = ({navigation,route}) => {
  React.useLayoutEffect(() => {
  const routeName = getFocusedRouteNameFromRoute(route);
  if (routeName === "Cardtwo") {
    navigation.setOptions({tabBarVisible:false});
  } else if (routeName === "Gallery") {
    navigation.setOptions({tabBarVisible:false});
  } 
  else {
    navigation.setOptions({tabBarVisible:true});
  }
  }, [navigation,route]);
  return(
  <Stack.Navigator>
    <Stack.Screen  name="INline" component={MainTab}
    options={() => 
  ({
      headerShown:true,
      headerTitleStyle: { alignSelf: 'center' },
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
      <Stack.Screen name="Gallery" component={Gallery} 
          options={() => 
            ({
              headerBackTitleVisible:false,
              headerTitle:false,
              headerTransparent:true,
              headerTintColor:'#fff',
            })
          }/>
      <Stack.Screen name="Reservation" component={Reservation}/>
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
        <Stack.Screen name="Profile" component={ProfilePage} />
      </Stack.Navigator>
    );
  };
  export { HomeNavigator, FavoritesNavigator, NotificationsNavigator, ProfileNavigator};