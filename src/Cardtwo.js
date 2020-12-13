import React, {useRef} from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity, Animated, ImageBackground,ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Akcii from './Akcii';
import * as Animatable from 'react-native-animatable';



const Images={
  img:[
  { image: require("./img/Image1.png") },
  { image: require("./img/Image2.jpg") },
  { image: require("./img/Image3.jpg") },
  { image: require("./img/date1.jpg") },
  { image: require("./img/date2.jpg") },
  { image: require("./img/date3.jpg") },
  ],
  akc:[
    { image: require("./img/k1.jpg") },
    { image: require("./img/k2.jpg") },
    { image: require("./img/k1.jpg") },
    ]
};


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
  const [statee,setStatee] = React.useState(Images);
    return (
      <ScrollView horizontal={false}>
    <Animatable.View style={{flex:1}}
    animation="slideInUp"
    delay={200}
    >
    <View 
    style={[
      StyleSheet.absoluteFillObject,
      {flex:1, backgroundColor:'white',height:322}]}>
      <ImageBackground source={itemData.image} style={styles.image}/>
      </View>
      <View style={styles.bg}> 
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:350}}> 
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
                {statee.akc.map(( ak ,index) => (
                 <Akcii key={index}
                    imageUri=
                  {ak.image}/>
                ))}
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
               <View>

                  <Text style={{position:'absolute', left:0, top:0,marginBottom:10,marginLeft:10,fontSize:16,color:'gray'}}>Фотографии</Text>
                  </View>
                    <ScrollView horizontal>
                    <View style={styles.gallery}>
                    {statee.img.map(( ig ,index) => (
                    <TouchableOpacity  key={index}>
                    <Image  source={ig.image} key={index}
                    style={styles.listImage}/>
                    </TouchableOpacity>
                    ))}
                    </View>
                    </ScrollView>
                <View style={styles.sec}>
                  <Text style={styles.sectionContent}>
                  ​Средний чек 3000 тнг.
                  </Text>
                  <Text style={styles.sectionContent}>
                  ​Восточная кухня​
                  </Text>
                  <Text style={styles.sectionContent}>​
                  Турецкая кухня​
                  </Text>
                  <Text style={styles.sectionContent}>
                  ​Спортивные трансляции
                  </Text>
                  <Text style={styles.sectionContent}>
                  ​До 40 мест
                  </Text>
                </View>
                <View style={styles.button}>
                <TouchableOpacity 
                onPress ={() => {}}
                  style={[styles.order, {
                    borderColor: '#000',
                    borderWidth: 1
                  }]}
                >
                  <Text style={[styles.textSign, {
                    color: '#000'
                  }]}>Order Now</Text>

                </TouchableOpacity>
                </View>
                </ScrollView>
                </View>
                
    
    </Animatable.View>
    </ScrollView>
  );
}

export default Cardtwo;


const styles = StyleSheet.create({

    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginBottom:20,
    },
      gallery:{
        marginTop:20,
        flexDirection:'row',
        borderBottomWidth:1,
        borderBottomColor:'#f3f3f3',
      },
    listImage:{
      height: 105,
      width: 100,
      borderRadius:20,
      position: 'relative', // because it's parent
      top: 7,
      marginRight:5,
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
      alignSelf:'center',
    },
    section: {
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#f3f3f3',
    },
    sec: {
      padding: 12,
      flexDirection:'column',
      borderBottomWidth: 1,
      borderBottomColor: '#f3f3f3',
    },
    order: {
      width: '80%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
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
    button: {
      marginTop:10,
      alignItems: 'center'
    },
    textSign: {
      fontSize: 20,
      fontWeight: 'bold'
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
      height:'80%',
      backgroundColor:'white',
      transform:[{translateY:260}],
      borderRadius:32,
      paddingTop:22,
    }
  })