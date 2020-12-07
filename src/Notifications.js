import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';

export default class Notifications extends Component {

    //Mapping applied here:
    state = {
        restaurants: [
            {
                name: 'Kowloon Bar',
                restaurantLogo: require('./img/Image1.png'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '20 min'
            },
            {
                name: 'Okko Bar',
                restaurantLogo: require('./img/Image2.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '33 min'
            },
            {
                name: 'Red Velvet Lounge',
                restaurantLogo: require('./img/Image3.jpg'),
                message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
                timeElsapsed: '1h 2 min'
            },
            {
                name: 'Olivier Restaurant',
                restaurantLogo: require('./img/date3.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '2h 35 min'
            },{
                name: 'Kowloon Bar',
                restaurantLogo: require('./img/Image1.png'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '1w 4 days'
            },
            {
                name: 'Okko Bar',
                restaurantLogo: require('./img/Image2.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '2 weeks'
            },
            {
                name: 'Red Velvet Lounge',
                restaurantLogo: require('./img/Image3.jpg'),
                message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
                timeElsapsed: '3 weeks'
            },
            {
                name: 'Olivier Restaurant',
                restaurantLogo: require('./img/date3.jpg'),
                message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
                timeElsapsed: '1 mon.'
            },
            
            
        ]
    }

  render() {
    return (

      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
            {this.state.restaurants.map((restik) => (
                <View style = {styles.notificationBlock}>
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
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
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
        fontFamily: "Avenir",
        marginLeft: 15,

  },timeStamp:{
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Avenir',
  },
  textTop:{
      height: '40%',
      flexDirection: 'row',
      height: 25,
  },
  message:{
    textAlign: 'center',
    fontSize: 15,
    fontFamily: "Avenir",
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
      fontFamily: 'Avenir',
      fontSize: 20,
      
  }
});
