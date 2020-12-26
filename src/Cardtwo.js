import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ImageBackground,ScrollView,StatusBar,Modal,Dimensions,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Modalcard from './Modalcard';
import { VictoryBar, VictoryChart,VictoryTheme } from "victory-native";
import { Container, Header, Tab, Tabs, TabHeading } from 'native-base';
import ImageGallery from './ImageGallery';
import Ionicons from '@expo/vector-icons/Ionicons';
import Swiper from 'react-native-swiper';

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
  const [modal,setModal] = useState(false);

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
      <View style={styles.bg}> 
      <ScrollView contentContainerStyle={{flexGrow:1,paddingBottom:300}} > 
       <Modalcard/> 
              <View style={styles.section}> 
                            <Text style={styles.titleSign}>{itemData.title}</Text>
                            <Text style={styles.sectionContent}>{itemData.opisanie_odin}</Text> 
                            <Text style={styles.sectionContent}>  {itemData.opisanie_dva}
                            </Text>
               </View>
                    <View>
                        <Text style={styles.photo}>Фотографии</Text>
                    </View>
                          <Modal
                          transparent={true}
                          animationTyp="slide"
                          visible={modal}
                          onRequestClose={()=> {setModal(false);}}>
                            <View style={styles.centeredView}>
                              <View style={styles.modalView}>
                               <Swiper
                                autoplay={false} 
                                showsPagination={false}
                                showsButtons={true}
                                activeDotColor={'gray'} 
                                dotColor={'white'}>
                                {statee.img.map((image,index)=>( 
                                  <Image source={image.image} resizeMode='contain' style={{width:400,height:265,alignSelf:'center'}} key={index}/>
                                   ))}
                                </Swiper>
                                <View>
                                <TouchableOpacity style={{ borderRadius: 20,padding: 14,elevation: 2,backgroundColor:'#F6F6F6'}} onPress={()=> {setModal(false);}}>
                                      <Text> Закрыть </Text>
                                  </TouchableOpacity>
                                  </View> 
                              </View>
                            </View>
                          </Modal>
                        <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}
                        >
                            <View style={styles.gallery}>
                              {statee.img.map((image,index)=>(                             
                                 <TouchableOpacity key={index} onPress={()=> {
                                   setModal(true);
                                 }}>
                                <Image source={image.image} style={{width:90,height:90,marginLeft:10,marginTop:10,resizeMode:'cover'}}/>
                              </TouchableOpacity>
                                ))}     
                                </View>
                        </ScrollView>
                        <View style={{...styles.sec,borderTopWidth:1,borderTopColor: '#f3f3f3',marginTop:5}}>
                                 <Text style={{fontSize:18}}> Адрес: Фурманова 139 </Text>
                        </View>
                  <View style={{height:400,borderBottomWidth: 1,borderBottomColor: '#f3f3f3',borderTopWidth:1,borderTopColor: '#f3f3f3',marginTop:5}}>
                    <Container>             
                      <Header hasTabs style={{backgroundColor:'white',height:0}} androidStatusBarColor='black' />
                          <Tabs>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>ПН</Text></TabHeading>}>
                               <Graphic_ponedelnik/>
                            </Tab>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>ВТ</Text></TabHeading>}>
                                <Graphic_Vtornik/>
                            </Tab>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>СР</Text></TabHeading>}>
                                  <Graphic_Sreda />
                            </Tab>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>ЧТ</Text></TabHeading>}>
                                  <Graphic_ponedelnik />
                            </Tab>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>ПТ</Text></TabHeading>}>
                                  <Graphic_Sreda />
                            </Tab>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>СБ</Text></TabHeading>}>
                                  <Graphic_Sreda />
                            </Tab>
                            <Tab heading={<TabHeading style={{backgroundColor:'black'}}><Text style={{fontSize:14,color:'white'}}>ВС</Text></TabHeading>}>
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
      marginBottom:10,
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