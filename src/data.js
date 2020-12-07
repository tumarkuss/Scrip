
import React from 'react';
import {  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
  // Списки с данными
  // тут фотки
  
// Тут данные  для Swiper места для свидании

// список с категориями 
const Images=[
  { image: require("./img/Image1.png") },
  { image: require("./img/Image2.jpg") },
  { image: require("./img/Image3.jpg") },
  { image: require("./img/date1.jpg") },
  { image: require("./img/date2.jpg") },
  { image: require("./img/date3.jpg") },
];
export const DATA = [ 
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Kowloon',
    image: Images[0].image,
    ratings:4,
    reviews:178,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'New Way',
    image: Images[1].image,
    ratings:4,
    reviews:178,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'GASPAda',
    image: Images[2].image,
    ratings:4,
    reviews:178,
  },
  {
    id: '58692a0f-3da1-471f-bd96-145571e29d72',
    title: 'GASPAda',
    image: Images[4].image,
    ratings:4,
    reviews:178,
  },
  {
    id: '58294a0f-3da1-471f-bd96-145571e29d72',
    title: 'GASPAda',
    image: Images[5].image,
    ratings:4,
  },
  {
    id: '58694a0f-21a1-471f-bd96-145571e29d72',
    title: 'GASPAda',
    image: Images[3].image,
    ratings:4,
    reviews:178,
  },
  {
    id: '586ss94a0f-3da1-471f-bd96-145571e29d72',
    title: 'GASPAda',
    image: Images[2].image,
    ratings:4,
    reviews:178,
  },
];
// Тут данные  для Swiper лучшие за месяц
export const ListsMapState ={
materials: [
  {
    id:1,
    image:Images[0].image,
    ratings:4,
    name:('CardList'),
  },
  {
    id:2,
    image:Images[1].image,
    ratings:4,
    name:('CardTwo'),
  },
  {
    id:3,
    image:Images[2].image,
    ratings:4,
    name:('CardList'),
  },
],
svidanies: [
  {
    id:4,
    image:Images[1].image,
    ratings:4,
  },
  {
    id:5,
    image:Images[4].image,
    ratings:4,
  },
  {
    id:6,
    image:Images[5].image,
    ratings:4,
  },
],
categories: [
  { 
    name: 'Перекусить', 
    icon: <MaterialCommunityIcons style={{marginRight:5}} color = '#000' name="food-fork-drink" size={18} />,
  },
  {
    name: 'Рестораны',
    icon: <Ionicons name="ios-restaurant" style={{marginRight:5}} color = '#000' size={18} />,
  },
  {
    name: 'Свидания',
    icon: <Ionicons name="md-restaurant" style={{marginRight:5}}  color = '#000' size={18} />,
  },
  {
    name: 'Бургерные',
    icon: <MaterialCommunityIcons name="food" style={{marginRight:5}} color = '#000' size={18} />,
  },
  {
    name: 'Hotel',
    icon: <Fontisto name="hotel" style={{marginRight:5}} color = '#000' size={15} />,
  },
],
restaurants: [
  {
      name: 'Kowloon Bar',
      restaurantLogo: require('./img/Image1.png'),
      message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
      timeElsapsed: '20 min',
      id:11
  },
  {
      name: 'Okko Bar',
      restaurantLogo: require('./img/Image2.jpg'),
      message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
      timeElsapsed: '33 min',
      id:12
  },
  {
      name: 'Red Velvet Lounge',
      restaurantLogo: require('./img/Image3.jpg'),
      message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
      timeElsapsed: '1h 2 min',
      id:13,
  },
  {
      name: 'Olivier Restaurant',
      restaurantLogo: require('./img/date3.jpg'),
      message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
      timeElsapsed: '2h 35 min',
      id:14
  },{
      name: 'Kowloon Bar',
      restaurantLogo: require('./img/Image1.png'),
      message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
      timeElsapsed: '1w 4 days',
      id:15
  },
  {
      name: 'Okko Bar',
      restaurantLogo: require('./img/Image2.jpg'),
      message: 'You have succesfully Booked a table for 4. At 7:00 p.m. Reservetion is active till 7:30. Looking forward to having you!',
      timeElsapsed: '2 weeks',
      id:16
  },
  {
      name: 'Red Velvet Lounge',
      restaurantLogo: require('./img/Image3.jpg'),
      message: "Havent't seen you in a while. We have a special promotion for you tonight! ",
      timeElsapsed: '3 weeks',
      id:17
  },
  {
      name: 'Olivier Restaurant',
      restaurantLogo: require('./img/date3.jpg'),
      message: 'You have succesfully Booked a table for 4. At 7:00 p.m., Friday. Reservetion is active till 7:30. Looking forward to having you!',
      timeElsapsed: '1 mon.',
      id:18
  },
   
]
}