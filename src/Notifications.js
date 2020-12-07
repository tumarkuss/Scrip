import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import {ListsMapState} from "./data";
export default function Notifications() {

    //Mapping applied here:
    const [state, setState] = React.useState(ListsMapState);
    return (

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
            {state.restaurants.map((restik) => (
                <View key={restik.id} style = {styles.notificationBlock}>
                    <View style={styles.avatarBlock}>
                        <View>
                            <Image 
                            source={restik.restaurantLogo} 
                            style={styles.restaurantAvatar} 
                            />
                        </View>
                        
                        
                    </View>
                    <View style={styles.textBlock}>
                        <View style={styles.textTop}>
                            <Text style={styles.textTitle}>
                                {restik.name}
                            </Text>
                            <Text style={styles.timeStamp}>
                                {restik.timeElsapsed}
                            </Text>
                        </View>
                        <View style={styles.messageBlock}>
                            <Text style={styles.message}adjustsFontSizeToFit={true}>
                                {restik.message}
                            </Text>
                        </View>
                    </View>
                </View>
            ))}

            <View style={styles.lastMessage}>
                <Text>No more messages to display.</Text>
            </View>

            </ScrollView>


        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fff'
    //justifyContent: 'center',
  },
  scroll:{
    flexGrow:1,
    paddingBottom:200,
  },
  notificationBlock:{
    marginTop: 5,
    height: 100,
    width: '100%',
    flexDirection: 'row',
  },
  avatarBlock:{
      width: '25%',
      //backgroundColor: 'blue',
      flexDirection: 'column',

  },
  textBlock:{
      //backgroundColor: 'white',
      flexDirection: 'column',
      width: '75%',
  },
  restaurantAvatar:{
        width: 80,
        height: 80,
        borderRadius: 80/ 2,
        marginLeft: 10
        
  },
  textTitle:{
        width: '75%',
        textAlign: 'left',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 15,

  },
  timeStamp:{
        fontSize: 13,
        fontWeight: '400',
  },
  textTop:{
      height: '40%',
      flexDirection: 'row',
      height: 25,
  },
  message:{
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 0,
  },
  messageBlock:{
    height: '70%',
    marginTop: 3,
  },
  lastMessage:{
      marginTop: 15,
      marginBottom: 20,
      alignItems: 'center',
      fontSize: 20,
      
  }
});
