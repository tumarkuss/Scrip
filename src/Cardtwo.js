import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TouchableHighlight, ImageBackground,ScrollView,StatusBar,Modal,Dimensions,Image,TouchableWithoutFeedback} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modalcard from './Modalcard';
import { TabView, SceneMap } from 'react-native-tab-view';
import { VictoryBar, VictoryChart,VictoryTheme } from "victory-native";
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import Gallery from './Gallery';
import Akcii from './Akcii';

const WINDOW_WIDTH = Dimensions.get('window').width;

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

const images = [ {
  url: '',
  props: {
      // Or you can set source directory.
      source: require('./img/Kowloon1.jpg')
  }
}, {
  url: '',
  props: {
      // Or you can set source directory.
      source: require('./img/Kowloon2.jpg')
  }
},
{
  url: '',
  props: {
      // Or you can set source directory.
      source: require('./img/Kowloon3.jpg')
  }
},
];

const Cardtwo = ({route,navigation}) => {
  
  const Graphic_Sreda = () => { 
    return(
      <View>
        <View style={{alignSelf:'center'}}>
            <VictoryChart width={310} height={300} theme={VictoryTheme.material} domainPadding={{x: [10, 0]}} domain={{y:[0,100]}}>
                <VictoryBar style={{data:{fill:'#c43a31'}}}  data={itemData.dataSR} x="time" y="percent"/>
            </VictoryChart>
          </View> 
      </View>
  )};
const Graphic_Vtornik = () => {
return(
<View>
<View style={{alignSelf:'center'}}>
 <VictoryChart width={310} height={300} theme={VictoryTheme.material} domainPadding={{x: [10, 0]}} domain={{y:[0,100]}}>
  <VictoryBar style={{data:{fill:'#c43a31'}}}  data={itemData.dataVT} x="time" y="percent"/>
  </VictoryChart>
</View>
</View>
)};
const Graphic_ponedelnik = () => {
return(
<View>
  <View style={{alignSelf:'center'}}>
      <VictoryChart width={310} height={300} theme={VictoryTheme.material} domainPadding={{x: [10, 0]}} domain={{y:[0,100]}}>
          <VictoryBar style={{data:{fill:'#c43a31'}}}  data={itemData.dataPN} x="time" y="percent"/>
      </VictoryChart>
    </View> 
</View>
)};
  const itemData = route.params.itemData;
  const [statee,setStatee] = React.useState(Images);


    return (
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false} >
          <Animatable.View style={{flex:1}}
          animation="slideInUp"
          delay={200}>
              <View 
              style={[
                StyleSheet.absoluteFillObject,
                {flex:1, backgroundColor:'white',height:322}]}>
                  <ImageBackground source={itemData.image} style={styles.image}/>
               </View>
      <StatusBar style="auto" />
      <View style={styles.bg}> 
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:300}} > 
       <Modalcard/> 
              <View style={styles.section}> 
                            <Text style={styles.titleSign}>{itemData.title}</Text>
                            <Text style={styles.sectionContent}>{itemData.opisanie_odin}</Text> 
                            <Text style={styles.sectionContent}>  {itemData.opisanie_dva}
                            </Text>
               </View>
                    <View style={{marginBottom:25}}>
                        <Text style={styles.photo}>Фотографии</Text>
                    </View>
                            <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            >
                              <View style={{  
                                        flexDirection:'row',
                                        borderBottomWidth:1,
                                        height:90,
                                        borderBottomColor:'#f3f3f3'}}>
                        <TouchableHighlight style={{marginLeft:5}}
                        onPress={() => navigation.navigate('Gallery')}>
                            <Image source={require('./img/Kowloon1.jpg')} style={{width:90,height:90,resizeMode:'cover'}}/>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginLeft:5}}
                        onPress={() => navigation.navigate('Gallery')}>
                            <Image source={require('./img/Kowloon2.jpg')} style={{width:90,height:90,resizeMode:'cover'}}/>
                         </TouchableHighlight>
                          <TouchableHighlight style={{marginLeft:5}}
                        onPress={() => navigation.navigate('Gallery')}>
                            <Image source={require('./img/Kowloon3.jpg')} style={{width:90,height:90,resizeMode:'cover'}}/>
                         </TouchableHighlight>
                          <TouchableHighlight style={{marginLeft:5}}
                        onPress={() => navigation.navigate('Gallery')}>
                            <Image source={require('./img/Image1.png')} style={{width:90,height:90,resizeMode:'cover'}}/>
                          </TouchableHighlight>
                          <TouchableHighlight style={{marginLeft:5}}
                        onPress={() => navigation.navigate('Gallery')}>
                            <Image source={require('./img/Kowloon5.jpg')} style={{width:90,height:90,resizeMode:'cover'}}/>
                          </TouchableHighlight>
                                </View>
                        </ScrollView>
                        <View style={{...styles.sec,borderTopWidth:1,borderTopColor: '#f3f3f3',marginTop:5}}>
                                 <Text style={{fontSize:18}}> Адрес: Фурманова 139 </Text>
                        </View>
                        <View style={{height:400,borderBottomWidth: 1,borderBottomColor: '#f3f3f3',borderTopWidth:1,borderTopColor: '#f3f3f3'}}>
            <Container>             
              <Header hasTabs style={{backgroundColor:'white',height:0}} androidStatusBarColor='white' />
                  <Tabs tabContainerStyle={{backgroundColor:"white"}} tabBarUnderlineStyle={{backgroundColor:'black'}}>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>ПН</Text></TabHeading>}>
                       <Graphic_ponedelnik/>
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>ВТ</Text></TabHeading>}>
                        <Graphic_Vtornik/>
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>СР</Text></TabHeading>}>
                          <Graphic_Sreda />
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>ЧТ</Text></TabHeading>}>
                          <Graphic_ponedelnik />
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>ПТ</Text></TabHeading>}>
                          <Graphic_Sreda />
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>СБ</Text></TabHeading>}>
                          <Graphic_Sreda />
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>ВС</Text></TabHeading>}>
                          <Graphic_ponedelnik />
                    </Tab>
                  </Tabs>
           </Container>
               <View style={{marginBottom:2,marginLeft:10,padding:10}}>
                  <Text style={{fontSize:15}}> В данном графике указывается загруженность заведения в определенные дни и часы.</Text>
              </View>
        </View>
                <View style={styles.sec}>
                    <Text style={styles.sectionContent}>
                    ​Средний чек {itemData.bill} тнг.
                    </Text>
                    <Text style={styles.sectionContent}>
                    {itemData.kitchen}
                    </Text>
                    <Text style={styles.sectionContent}>​
                    Турецкая кухня​
                    </Text>
                    <Text style={styles.sectionContent}>
                    {itemData.dop_info}
                    </Text>
                    <Text style={styles.sectionContent}>
                    ​До {itemData.mest} мест
                    </Text>
                </View>
                   <View style={styles.button}>
                      <TouchableOpacity 
                      onPress ={() => navigation.navigate('Reservation',{itemData:itemData})}
                        style={[styles.order, {
                          borderColor: '#000',
                          borderWidth: 1
                        }]}>
                      <Text style={[styles.textSign, {
                        color: '#000'
                      }]}>Order Now</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                  <View style={{flexDirection:'row'}}>
                  <View style={{marginLeft:10}}>
                    <View style={{marginTop:10,height:97}}>
                      <Image style={{width:92,height:97}}
                      source={require('./img/logo.png')}/>
                    </View>
                    <View>
                      <Text>
                        Дэвид Бэкхем
                      </Text>
                      <Text style={{fontSize:12}}>
                        Официант
                      </Text>
                    </View>
                  </View>
                  <View style={{marginLeft:10}}>
                    <View style={{marginTop:10,height:97}}>
                      <Image style={{width:92,height:97}}
                      source={require('./img/logo.png')}/>
                    </View>
                    <View>
                      <Text>
                        Дэвид Бэкхем
                      </Text>
                      <Text style={{fontSize:12}}>
                        Шеф-повар
                      </Text>
                    </View>
                  </View>
                  </View>
                </ScrollView>
            </ScrollView>
          </View>
    </Animatable.View>
    </ScrollView>
  );
}

export default Cardtwo;


const styles = StyleSheet.create({
    gallery:{
      marginTop:20,
      flexDirection:'row',
      borderBottomWidth:1,
      borderBottomColor:'#f3f3f3',
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
  },
    modalView: {
        margin: 20,
        borderRadius: 20,
        height:400,
        width:430,
        padding: 35,
        alignItems: "center",
      }, 
    titleSign:{
      fontSize:25,
      alignSelf:'center',
      marginBottom:15,
      fontWeight:'normal',
      textTransform:'uppercase',
      color:'#000',
    },
    photo:{
      position:'absolute', 
      left:0, 
      top:0,
      marginBottom:10,
      marginLeft:10,
      fontSize:16,
      color:'gray'
    },
    photoGallery: {
      flex: 1,
      marginTop:5,
  },
  photoBackground: {
      flex: 1,
      width:391.8,
      height:300,
      marginBottom:10,
      marginTop:20
  },
  photoPhoto: {
      width:400,
      height:300,
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
      padding:10,
      elevation:3,
      backgroundColor:'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20
    },
    button: {
      marginTop:10,
      height:50,
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
      height:'100%',
      backgroundColor:'white',
      transform:[{translateY:260}],
      borderRadius:32,
      paddingTop:22,
    }
  })