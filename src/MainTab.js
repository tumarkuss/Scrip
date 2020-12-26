
import React from 'react';
import {
  Text,
  TextInput,
  View,
  ScrollView,
  StyleSheet,
  Animated,
  ImageBackground,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from '@expo/vector-icons/Ionicons';
import {ListsMapState} from './data';
  


export default function MainTab({navigation}) {   
  //Метод setState() следит за изменением состояния (state) компонента. state — это объект. 
  // Когда состояние меняется, компонент рендерится повторно.

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  state = {
    swiperData: [
      {
        id: 11,
        image: require('./img/date3.jpg'),

      },
      {
        id: 12,
        image: require('./img/date3.jpg'),
      },
      {
        id: 13,
        image: require('./img/date3.jpg'),
      },
      {
        id: 14,
        image: require('./img/date3.jpg'),
      },
      {
        id: 14,
        image: require('./img/date3.jpg'),
      }
    ],
    categories: [
        {
          name: 'Фастфуд',
          icon: require('./img/homeTabCategories/fastfood.png'),
          navigateTo: 'Rest',
          id: 1
        },{
          name: 'Рестораны',
          icon: require('./img/homeTabCategories/restaurant.png'),
          navigateTo: 'Rest',
          id: 2

        },{
          name: 'Бары',
          icon: require('./img/homeTabCategories/bar1.png'),
          navigateTo: 'Rest',
          id: 3

        },{
          name: 'Для детей',
          icon: require('./img/homeTabCategories/kids.png'),
          navigateTo: 'Rest',
          id: 4
        },{
          name: 'Семейные',
          icon: require('./img/homeTabCategories/family.png'),
          navigateTo: 'Rest',
          id: 5

        },{
          name: 'Изысканные',
          icon: require('./img/homeTabCategories/gourmet.png'),
          navigateTo: 'Rest',
          id: 6

        },{
          name: 'Кофе и Чай',
          icon: require('./img/homeTabCategories/coffee.png'),
          navigateTo: 'Rest',
          id: 7
        },{
          name: 'Морепродукты',
          icon: require('./img/homeTabCategories/seafood.png'),
          navigateTo: 'Rest',
          id: 8

        },{
          name: 'Лаунджи',
          icon: require('./img/homeTabCategories/lounge.png'),
          navigateTo: 'Rest',
          id: 9

        }
    ],
    HomePageSliderData:[
        {
            blockName: "Для Вас",
            id:69,
            blockData:[
              {
                name: 'Olivier',
                bill: 5000,
                information: 'Ресторан-Европейская Кухня',
                rating: 4.7,
                id: 501
              },
              {
                name: 'Вьет-Кафе',
                bill: 2300,
                information: 'Ресторан/Кафе-Азиатская Кухня',
                rating: 3.5,
                id: 502
        
              },
              {
                name: 'Cafe Central',
                bill: 4300,
                information: 'Ресторан-Европейская Кухня',
                rating: 3.8,
                id: 503
        
                
              },
              {
                name: 'S.N.E.G.',
                bill: 4000,
                information: 'Ресторан-Горный-Европейская Кухня',
                rating: 4.7,
                id: 504
        
              }
            
            ],

        },
        {
            blockName: "Лучшее за Неделю",
            id:70,
            blockData:[
              {
                name: 'Olivier',
                bill: 5000,
                information: 'Ресторан-Европейская Кухня',
                rating: 4.7,
                id: 505
              },
              {
                name: 'Вьет-Кафе',
                bill: 2300,
                information: 'Ресторан/Кафе-Азиатская Кухня',
                rating: 3.5,
                id: 506
        
              },
              {
                name: 'Cafe Central',
                bill: 4300,
                information: 'Ресторан-Европейская Кухня',
                rating: 3.8,
                id: 507
        
                
              },
              {
                name: 'S.N.E.G.',
                bill: 4000,
                information: 'Ресторан-Горный-Европейская Кухня',
                rating: 4.7,
                id: 508
        
              }
            
            ],
            

        },  
        {
          blockName: "Новые в приложении",
          id:71,
          blockData:[
            {
              name: 'Olivier',
              bill: 5000,
              information: 'Ресторан-Европейская Кухня',
              rating: 4.7,
              id: 509
            },
            {
              name: 'Вьет-Кафе',
              bill: 2300,
              information: 'Ресторан/Кафе-Азиатская Кухня',
              rating: 3.5,
              id: 510
      
            },
            {
              name: 'Cafe Central',
              bill: 4300,
              information: 'Ресторан-Европейская Кухня',
              rating: 3.8,
              id: 511
      
              
            },
            {
              name: 'S.N.E.G.',
              bill: 4000,
              information: 'Ресторан-Горный-Европейская Кухня',
              rating: 4.7,
              id: 512
      
            }
          
          ],
        }    
    ]
  }
  
  
  return(
    <View style={styles.contentContainer}>
      <ScrollView style={{width: '100%'}}>

          <View style={styles.sliderContainer}>
              <Swiper
                autoplay={false} 
                height={200}
                showsPagination={true} 
                activeDotColor={'gray'} 
                dotColor={'white'}> 
                    {state.swiperData.map((swipes) => (
            <TouchableHighlight key = {swipes.id} onPress={() =>  navigation.navigate(category.navigateTo)}>
              
              <Image 
                source={swipes.image}
                resizeMode="cover"
                style={styles.sliderImage}
                />
              
            </TouchableHighlight>  
        ))}
        </Swiper>
        </View>

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
        horizontal={true}
        style={styles.categories}
        showsHorizontalScrollIndicator={false}
        marginTop={10}
        >
          {state.categories.map((category) => (
            <TouchableOpacity key = {category.id} onPress={() =>  navigation.navigate(category.navigateTo)}>
            <View left={7} top={12}>
            <View width={75} marginLeft={17} justifyContent={'center'} >
                <Image
                source={category.icon}
                height={30}
                width={30}
                style={{resizeMode:'stretch',width:55, height: 55}}
                />
            </View>
                <View
                 alignItems="center"
                 >
                <Text justifyContent={'center'}>{category.name}</Text>
              </View>
              </View>
          </TouchableOpacity>
            
          ))}
        </ScrollView>
            


        {state.HomePageSliderData.map((item) => (
            <View key={item.id} style={styles.roller}>
              <View style={styles.rollerTitle}>
                <View style={{width: '90%'}}>
                  <Text style={styles.rollerTitleText}>{item.blockName}</Text>
                </View>

                <View>
                    <TouchableWithoutFeedback
                    activeOpacity={0.6}
                    underlayColor="#DDDDDD"
                    onPress={() => alert('Открывает полный список')}>
                    <View style={{ height: '100%', justifyContent:'flex-end',alignItems: 'center', flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, color: 'black'}}>
                        Все 
                      </Text>
                      
                    </View>
                  </TouchableWithoutFeedback>
                </View>
                
              </View>
              
              <View>

                <ScrollView
                height={200}
                horizontal={true}
                showsHorizontalScrollIndicator = {false}
                contentContainerStyle={{ alignItems: 'center'}}
                >

                {item.blockData.map((data) => (
                  <TouchableWithoutFeedback
                  key = {data.id}
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD"
                  onPress={() => alert('Открывает ресторан(Поменять на функцию)')}>
                  
                  <View style={styles.restaurantBlock}>
                    <View style={{height: 130, width: 300}}>
                      <ImageBackground source={require('./img/date3.jpg')} style={styles.restaurantImage}>
                          <View style={{alignItems: 'flex-end', justifyContent:'flex-end', height: 130}}>
                              <Ionicons name='heart' size={35}></Ionicons>
                          </View>
                      </ImageBackground>
                      <View style={{flexDirection: 'column'}}>
                          <View style={{flexDirection: 'row'}}>
                              <View style={{width: 270,height: 40}}>
                                <Text style={{fontSize: 23}}>{data.name}</Text>
                              </View>
                              <View style={styles.ratingBox}>
                                <Text style={{fontSize: 15, fontWeight: '600'}}>{data.rating}</Text>
                              </View>
                          </View>
                          <View style={{flexDirection: 'row'}}>
                            <Text>
                              {data.information}
                            </Text>
                          </View>
                      </View>
                    </View>


                  </View>
                </TouchableWithoutFeedback>
                ))}

                </ScrollView>
              </View>
              
            </View>

            ))}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F6F6F6'
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 2,
  },
  searchBox:{
    alignSelf: 'center',
    marginTop: 10,
    flexDirection:"row",
    backgroundColor: 'white',
    borderColor: '#DDDDDD',
    borderWidth: 2,
    width: '90%',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#DDDDDD',
    shadowOpacity: 0.5,
  },
  categories:{
    width: '100%',
    height: 100,
    backgroundColor: '#F6F6F6',
  },
  sliderContainer: {
    height: 200,
    width: '100%',
    marginTop:0,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  roller:{
    marginTop: 15,
    width: '100%',
    height: 260,
    backgroundColor: '#FEFFFE'
  },
  rollerTitle:{
    alignItems: 'center',
    flexDirection:'row',
    height: 60,
    width: '100%',
    backgroundColor: 'white'
  },
  rollerTitleText:{
    marginLeft:20,
    alignItems: 'center',
    fontSize: 25,
    fontWeight: '600'
  },
  restaurantBlock:{
    marginLeft:15,
    height: 200,
    width: 300,
  },
  restaurantImage:{
    height: '100%',
    width: '100%'
  },
  ratingBox:{
    borderRadius:30,
    height: 30,
    width: 30,
    backgroundColor: '#EFEFEF',
    marginTop: 3,
    alignItems:'center',
    justifyContent:'center',
  }
});