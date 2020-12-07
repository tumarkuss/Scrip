import React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity, SafeAreaView, ImageBackground, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Akcii from './Akcii';
import * as Animatable from 'react-native-animatable';

const DURATION = 400;

const Images=[
  { image: require("./img/Image1.png") },
  { image: require("./img/Image2.jpg") },
  { image: require("./img/Image3.jpg") },
  { image: require("./img/date1.jpg") },
  { image: require("./img/date2.jpg") },
  { image: require("./img/date3.jpg") },
];

const typeMapState = {
  types: [
    { 
      name: 'Меню', 
      icon: <Ionicons name="ios-restaurant" size={26} color="#000" />,
    },
    {
      name: 'График',
      icon:  <Ionicons name="ios-time" size={26} color="#000" />,
    },
    {
      name: 'Плейлист',
      icon: <MaterialCommunityIcons name="music" size={26} color="#000" />,
    },
    {
      name: 'Бар',
      icon: <MaterialCommunityIcons name="glass-cocktail" size={26} color="#000" />,
    },
    {
      name: 'Процентаж',
      icon: <MaterialCommunityIcons name="star-outline" size={26} color="#000"  />,
    },
],
};

const Cardtwo = ({route}) => {
  const itemData = route.params.itemData;
  const [state, setState] = React.useState(typeMapState);
  return (
    <Animatable.View style={{flex:1}}
    animation="slideInUp"
    delay={200}
    >
    <View 
    style={[
      StyleSheet.absoluteFillObject,
      {flex:1, backgroundColor:'white',height:332}]}>
      <ImageBackground source={itemData.image} style={styles.image}/>
      </View>
      <View style={styles.bg}> 
      <ScrollView contentContainerStyle={{flexGrow:1}}> 
        <View>
      <View style={styles.categoryContainer}>          
      {state.types.map((type, index) => (
                <TouchableOpacity key={index}
                  style={styles.categoryBtn}
                  onPress={() =>
                    alert('test1')}>
                  <View style={styles.categoryIcon}>
                    {type.icon} 
                  </View>
                  <Text style={styles.categoryBtnTxt}>{type.name}</Text>
                </TouchableOpacity>
                        ))}
        </View>
        <View style={{height:130,marginTop:0,marginBottom:10}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                 <Akcii 
                    imageUri=
                    {require('./img/k1.jpg')}/>
                 <Akcii 
                     imageUri=
                  {require('./img/k2.jpg')}/>
                <Akcii 
                    imageUri=
                    {require('./img/k1.jpg')}/>
                <Akcii 
                     imageUri=
                  {require('./img/k1.jpg')}/>
                <Akcii 
                    imageUri=
                    {require('./img/k2.jpg')}/>
                 <Akcii 
                     imageUri=
                  {require('./img/k1.jpg')}/>
                </ScrollView>
                </View>
                <View style={styles.section}
                > 
                            <Text style={styles.titleSign}>{itemData.title}</Text>
                        <Text style={styles.sectionContent}>    Популярный бар среди, молодёжи, здесь вы увидите всех своих знакомых и найдёте себе приключения</Text> 
                            <Text style={styles.sectionContent}>  Теперь он известен как центр торговли, искусства и развлечений. 
                       У любителей шопинга пользуются популярностью.
                           </Text>
               </View>

                <ScrollView horizontal>
                <View style={styles.gallery}>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                <Image  source={require('./img/Image1.png')}
                style={styles.listImage}/>
                </View>
                </ScrollView>
                </View>
          </ScrollView>
      </View>
    </Animatable.View>
  );
}

export default Cardtwo;


const styles = StyleSheet.create({

    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginBottom:30,
    },
          gallery:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
        marginTop:20,
      },
    listImage:{
      height: 105,
      width: 95,
      position: 'relative', // because it's parent
      top: 7,
      marginBottom:20,
      left: 5,
    },
    titleSign:{
      fontSize:25,
      alignSelf:'center',
      marginBottom:10,
      fontWeight:'normal',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width:-1, height: 3},
      textShadowRadius: 10,
      textTransform:'uppercase',
      color:'#000',
    },
    sectionContent: {
      fontSize: 16,
      textAlign:'justify',
      color:'#000',
    },
    section: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#f3f3f3',
    },
    categoryIcon: {
      alignItems: 'center',
      justifyContent:'center',
      alignSelf: 'center',
    },
    categoryBtnTxt: {
      marginTop:0,
      fontSize:12,
      alignSelf:'center',
      color: '#000',
    },
    categoryBtn: {
      flex: 1,
      width: '26%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    name:{
      fontWeight:'700',
      fontSize:20,
      position:'absolute',
      top:220,
      padding:20,
    },
    image:{
        width:'100%',
        height:'98%',
        resizeMode:'contain',
        position:'absolute',
        bottom:0,
        right:0,
        top:0,
    },
    bg: {
      position:'relative',
      width:'100%',
      height:'100%',
      backgroundColor:'white',
      transform:[{translateY:270}],
      borderRadius:32,
      paddingTop:42,
    }
  })