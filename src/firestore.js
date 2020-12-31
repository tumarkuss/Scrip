import React, { Component } from 'react';
import {View,Text,TextInput,Button,FlatList,TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import "@firebase/firestore";
import { restsRef } from './firebaseConfig';
import {FontAwesome5} from '@expo/vector-icons';

function Item({name,type}) {
    return(
        <View style={{alignSelf:'center'}}>
            <Text>Название: {name}</Text>
            <Text>Тип: {type}</Text>
        </View>
    );
}

export default class Firestore extends Component {
    state={
        rests:[],
    };

    readrestsRef = () => {
        let rest =[];
        restsRef.where('type','==','rest').onSnapshot(querySnapShot => {
        querySnapShot.forEach((doc)=> {
            rest.push(doc.data());
        });
        this.setState({rests: rest.sort()})
        });
    };
    addRests = () => {
        let rest = {
            name:"",
            type:""
        };
        Alert.prompt("Добавить заведение", "Введите название заведения", (text) => {
            rest.name= text;
            Alert.prompt("Добавить заведение", "Введите тип заведения", (text) => {
                rest.type = text;

                restsRef.add(rest).then(() => {
                    alert("Заведение добавлено");
                });
            });
        });

    };
    componentDidMount(){
        this.readrestsRef();
    }
    render() {
        return(
            <View style={{flex:1,alignSelf:'center'}}>
                <Text> Rests list</Text>
                <TouchableOpacity onPress={()=> this.addRests()}
                style={{alignSelf:'center',margin:20}}
                >
                    <FontAwesome5 
                    name='plus'
                    size={20}/>
                </TouchableOpacity>
                <FlatList
                data={this.state.rests}
                renderItem={({item})=> (
                    <Item
                    name={item.name}
                    type={item.type}
                    />
                )}
                />
            </View>
        )
    }
}