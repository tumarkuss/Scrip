import React, { useState } from 'react';
import {View,Modal, Text, StyleSheet, TouchableOpacity, ImageBackground,Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native-gesture-handler';


const Reservation = ({route}) => {
    const itemData = route.params.itemData;
    const [modal,setModal] = useState(false);
  return (
      <View style={styles.container}>
          <View style={{flexDirection:'row',width:'100%',height:'8.4%'}}>
            <View style={{alignSelf:'flex-start',padding:15,width:'41%'}}>
                <TouchableOpacity style={{flexDirection:'row'}}
                onPress={() => alert('выпадающий список')}>
                    <View style={{borderWidth:1,borderRightWidth:0,flexDirection:'row'}}>
                        <Ionicons name="person" size={22} color="black" style={{top:1}} /> 
                        <Text style={{fontSize:20,bottom:1}}>1</Text>
                    </View>
                    <View style={{borderWidth:1}}>
                        <Ionicons name="arrow-down" size={22} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{justifyContent:'center',top:1}}>
                <TouchableOpacity style={{flexDirection:'row'}} onPress={() => alert('выпадающий список')}>
                    <View style={{borderWidth:1,borderRightWidth:0}}>
                            <Text style={{fontSize:20}}>11:00</Text>
                    </View>
                    <View style={{borderWidth:1}}>
                        <Ionicons name="arrow-down" size={22} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            </View>
            <View>
                <View style={{alignSelf:'center',width:380,marginTop:10,borderRadius:7}}>
                <ImageBackground 
                    resizeMode='contain'
                    style={{width:380,height:200}}
                    source={require('./img/scheme2.jpg')}>
                <Modal
                transparent={true}
                animationType="slide"
                visible={modal}
                onRequestClose={()=> {setModal(false);}}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Image style={{resizeMode:'stretch',width:300,height:300,marginBottom:20}} source={require('./img/sixpeople.jpg')}/>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#2196F3",marginRight:30 }}
                        onPress={() => {
                            setModal(false);
                        }}
                        >
                          <Text style={styles.textStyle}> Закрыть </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        >
                          <Text style={styles.textStyle}> Забронировать </Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                </View>
                </Modal>
                
                <View style={{position:'absolute'}}>
                    <View style={{top:60.3,left:51.2}}>
                    <TouchableHighlight style={styles.table} onPress={()=>{setModal(true);}}/>
                    </View>
                    <View style={{top:78,left:51}}>
                    <TouchableHighlight style={styles.table_dva} onPress={()=> alert('тут будет фотка стола')}/>   
                    </View>
                </View>
                </ImageBackground>
                </View>
            </View>
  </View>
  );
};

export default Reservation;

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#fff',
  },
  table:{
    borderWidth:1,
    borderRadius:1,
    width:17,
    height:31,
    backgroundColor:'#9CA1A5',
  },
  table_dva:{
    borderWidth:1,
    borderRadius:1,
    width:17,
    height:31,
    backgroundColor:'#8b0000',
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
},
modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    borderRadius: 20,
    padding: 14,
    elevation: 2
  },
  card: {
    height: 150,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});