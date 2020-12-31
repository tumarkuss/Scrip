import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Modal,Image,ScrollView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Menu from './Menu';

const Modalcard = () => {
  const [modal, setModal] = useState(false);

  const [modaltri, setModaltri] = useState(false);
    return (
      <View style={styles.categoryContainer}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modal}
        onRequestClose={() => { setModal(false);} }
      >
        <View style={styles.centeredMenu}>
          <View style={styles.modalMenu}>
            <Menu/>
            <View style={{marginTop:10}}>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    setModal(false);
                  }}
                >
                       <Text style={styles.textStyle}>Закрыть меню</Text>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>     
      <Modal
        transparent={true}
        animationType="slide"
        visible={modaltri}
        onRequestClose={() => { setModaltri(false);} }
      >
        <TouchableOpacity 
        style={{...styles.container,height:10,}}
        activeOpacity={1}
        onPressOut={() => { setModaltri(false);} }>
        <View style={styles.centeredView}>
          <View style={{...styles.modalView, backgroundColor:'yellow'
        }}>
          <Text style={{fontSize:18,}}>Популярные песни заведения</Text>
          <Text style={{fontSize:10,marginBottom:8}}>(Хип-хоп)</Text>
              <View style={{marginBottom:10,alignSelf:'flex-start'}}>
                <Text>1. JONY - AYO</Text>
                <Text>2. Drake - Hotline Blink</Text>
                <Text>3. Kendrick Lamar - Money Trees</Text>
                <Text>4. Migos - TACO Tuesday </Text>
                <Text>5. Скриптонит - ЦЕПИ</Text>
              </View>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModaltri(false);
              }}
            >
              <Text style={styles.textStyle}>Закрыть</Text>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
      </Modal> 
                <TouchableOpacity 
                  style={styles.categoryBtn}
                  onPress={() => {
                   setModal(true);
                  }}>
                  <View style={styles.categoryIcon}>
                  <Ionicons name="ios-restaurant" size={26} color="black" />
                  
                  <Text style={styles.categoryBtnTxt}>Меню</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.categoryBtn}
                  onPress={() => {
                   setModaltri(true);
                  }}>
                  <View style={styles.categoryIcon}>
                  <MaterialCommunityIcons name="music" size={26} color="black" />
                  
                  <Text style={styles.categoryBtnTxt}>Плейлист</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.categoryBtn}
                  onPress={() => {
                  alert('alert')
                  }}>
                  <View style={styles.categoryIcon}>
                  <MaterialCommunityIcons name="star-outline" size={26} color="black"  />
                  
                  <Text style={styles.categoryBtnTxt}>Избранное</Text>
                  </View>
                </TouchableOpacity>
                <View 
                  style={styles.categoryBtn}>
                  <View style={styles.categoryIcon}>
                  <MaterialCommunityIcons name="glass-cocktail" size={26} color="black" />
                  
                  <Text style={styles.categoryBtnTxt}>Бар</Text>
                  </View>
                </View>
        </View>
        
  );
}

export default Modalcard;


const styles = StyleSheet.create({

    container:{
      flex:1,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginBottom:10,
    },
    openButton: {
      borderRadius: 20,
      padding: 14,
      elevation: 2
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center"
    },
    centeredMenu: {
      flex: 1,
      justifyContent: "center",
      alignItems:'center',
      marginTop: 22
  },
  modalMenu: {
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      width:370,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
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
    categoryIcon: {
      alignItems: 'center',
      justifyContent:'center',
      alignSelf: 'center',
    },
    categoryBtnTxt: {
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
  })