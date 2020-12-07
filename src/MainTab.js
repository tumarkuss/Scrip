
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
  import { SharedElement } from 'react-native-shared-element';
  import Swiper from 'react-native-swiper';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import Fontisto from 'react-native-vector-icons/Fontisto';
  import Cardtwo from './Cardtwo';
  import {ListsMapState} from './data';


export default function App({navigation}) {   
  //Метод setState() следит за изменением состояния (state) компонента. state — это объект. 
  // Когда состояние меняется, компонент рендерится повторно.

  const [state, setState] = React.useState(ListsMapState);
  return (
    <View style={styles.container}> 
    <ScrollView contentContainerStyle={styles.scroll}> 
    <View style={styles.searchBox}>
        <TextInput 
          style={{
            borderColor:"#000",
            color:"black",
            borderBottomColor:"#000",
            backgroundColor:'#fff',
            flex:1,
          }}
          placeholder="Search here"
          placeholderTextColor="black"
          autoCapitalize="none"
          />
        <Ionicons name="ios-search" color="black" size={20} style={{marginTop:3}}/>
      </View>
      <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        height={60}
        style={styles.chipsScrollView}
        contentInset={{ // iOS only
          top:0,
          left:0,
          bottom:0,
          right:20
        }}
        contentContainerStyle={{
          paddingRight: Platform.OS === 'android' ? 20 : 0
        }}
      >
 
        {state.categories.map((category,index) => (
          <TouchableOpacity key={index} style={styles.chipsItem} onPress ={() => navigation.navigate('Rest')}>
            {category.icon}
            <Text style={{color:'black'}}>{category.name}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>
      <View style={styles.sliderContainer}>
    <Swiper autoplay height={200} activeDotColor="hide" autoplayTimeout={3.5} showsPagination={false} > 
         {state.materials.map((material, id) => (
        <TouchableOpacity key = {id} onPress={() => navigation.navigate('CardList')}>
           <Image 
            source={material.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
      <View style={styles.month}>
        <Text style={styles.monthText}>Лучшее за месяц</Text>
        <Text style={styles.monthWatch} >Посетили: 10 420</Text>
      </View>
      <View style={styles.sliderContainer}>
    <Swiper paginationStyle={{bottom:13}}
    autoplay={false} 
    height={200}
    showsPagination={true} 
    activeDotColor={'gray'} 
    dotColor={'white'}> 
        {state.svidanies.map((svidanie,id) => (
        <TouchableOpacity key = {id} onPress={() =>  navigation.navigate('Cardtwo')}>
           
           <Image 
            source={svidanie.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
          
        </TouchableOpacity>  
     ))}
     </Swiper>
     </View>
     <View style={styles.month}>
        <Text style={styles.monthText}>Места для идеальных свиданий!</Text>
        <Text style={styles.monthWatch} >Посетили: 8 121</Text>
      </View>
      <View style={styles.sliderContainer}>
    <Swiper paginationStyle={{bottom:13}}
    autoplay={false} 
    height={200}
    showsPagination={true} 
    activeDotColor={'gray'} 
    dotColor={'white'} > 
        {state.svidanies.map((svidanie, id) => (
        <TouchableOpacity key = {id} onPress={() =>  alert('test')}>
           <Image 
            source={svidanie.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
          <View style={styles.month}>
        <Text style={styles.monthText}>Места с уютной атмосферой!</Text>
        <Text style={styles.monthWatch} >Посетили: 5 991</Text>
      </View>
      <View style={styles.sliderContainer}>
    <Swiper paginationStyle={{bottom:13}}
    autoplay={false} 
    height={200}
    showsPagination={true} 
    activeDotColor={'gray'} 
    dotColor={'white'} > 
        {state.svidanies.map((svidanie, id) => (
        <TouchableOpacity key = {id} onPress={() =>  alert('test')}>
           <Image 
            source={svidanie.image}
            resizeMode="cover"
            style={styles.sliderImage}
            />
        </TouchableOpacity>
      ))}
     </Swiper>
     </View>
          <View style={styles.month}>
        <Text style={styles.monthText}>Места для идеальных свиданий!</Text>
        <Text style={styles.monthWatch} >Посетили: 8 121</Text>
      </View>
      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor:'#FFFFFF',
  },
  scroll:{
    flexGrow:1,
    paddingBottom:200,
  },
  searchBox: {
    position:'absolute', 
    marginTop:Platform.OS === "android" ? 45:0,
    color:'white',
    flexDirection:"row",
    backgroundColor: 'white',
    width: '90%',
    alignSelf:'center',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute',
    top:Platform.OS === 'ios' ? 90 : 80, 
    marginTop:18,
    paddingHorizontal:10
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  month: {
    alignItems:'flex-start',
    marginLeft:30,
    marginTop:-2,
    top:150,
    marginBottom:5,
  },
  monthText:{
    fontSize:15,
    marginTop:2,
    fontStyle:'italic',
    fontWeight:'bold',
    color:'black',
  },
  monthWatch: {
    fontSize:12,
    color:'gray',
    marginTop:2,
  },
  chipsIcon: {
    marginRight:5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'white', 
    marginTop:5,
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  sliderContainer: {
    height: 210,
    width: '90%',
    top: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 9,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
});
