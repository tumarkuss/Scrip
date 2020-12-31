import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";


class Akcii extends Component {
    render() {
        return (
          <View style={{flex:1,flexDirection:'row'}}>
          <View style={{height:130, width:93,padding:2}}>
          <Image 
            source={require('./img/k1.jpg')}
            style={styles.sliderImage}
          />
          </View>
          </View>
        );
    }
}
export default Akcii;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderImage: {
      height:'100%',
      resizeMode:'cover',
      width:'100%',
      borderRadius: 12,
    }
});