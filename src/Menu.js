import React, {useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Modal,Image,ScrollView} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading,ScrollableTab } from 'native-base';
import { color } from 'react-native-reanimated';

const food = {
    salat:[{
    name:'Салат с индейкой и яблочной заправкой',
    opisanie:'Фирменный овощный салат',
    kal:245,
    price:4870,
},
{
    name:'Салат Цезарь с курицой',
    opisanie:'Фирменный овощный салат',
    kal:245,
    price:4660,
},
{
    name:'Салат Цезарь с креветками',
    opisanie:'Фирменный овощный салат',
    kal:245,
    price:5460,
},
{
    name:'Салат Цезарь с креветками',
    opisanie:'Фирменный овощный салат',
    kal:245,
    price:5460,
},
{
    name:'Салат Цезарь с креветками',
    opisanie:'Фирменный овощный салат',
    kal:245,
    price:5460,
},
{
    name:'Дорогой',
    opisanie:'Фирменный овощный салат',
    kal:245,
    price:55060,
},
]}

const Menu = () => {
    const[eda,setEda] = React.useState(food);
    return(
<ScrollView style={{width:360,height:500}}>
   <Container>
       <Header hasTabs style={{backgroundColor:'white',height:30,marginBottom:10}} androidStatusBarColor='black' > 
       <Text style={{fontSize:20}}> Kowloon </Text>
        </Header>
       <Tabs tabContainerStyle={{ backgroundColor: "white" }} tabBarUnderlineStyle={{backgroundColor:'black'}} renderTabBar={()=> <ScrollableTab />}>
           <Tab style={{marginTop:10}} heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>Салаты</Text></TabHeading>}>
           {eda.salat.map((ed,index)=>
            <View style={styles.menu} key={index}>
                <View style={{marginBottom:10}}>
                      <View style={{alignSelf:'flex-start',marginBottom:5,width:285}} >
                        <Text style={{fontSize:17}}>{ed.name}</Text>
                      </View>
                    <View style={{width:280}}>
                        <View>
                          <Text style={{fontSize:12}}>{ed.opisanie}</Text>
                        </View>
                            <View>
                              <Text style={{fontSize:12}}>Калорийность: {ed.kal}</Text>
                         </View>
                     </View>
                </View>
                      <View style={styles.price}>
                          <Text style={{fontSize:17}}>{ed.price} тг</Text>
                     </View>
            </View>
            )}
           </Tab>
           <Tab style={{marginTop:10}} heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>Первое</Text></TabHeading>}>
           {eda.salat.map((ed,index)=>
            <View style={styles.menu} key={index}>
                <View style={{marginBottom:10}}>
                      <View style={{alignSelf:'flex-start',marginBottom:5,width:285}} >
                        <Text style={{fontSize:17}}>{ed.name}</Text>
                      </View>
                    <View style={{width:280}}>
                        <View>
                          <Text style={{fontSize:12}}>{ed.opisanie}</Text>
                        </View>
                            <View>
                              <Text style={{fontSize:12}}>Калорийность: {ed.kal}</Text>
                         </View>
                     </View>
                </View>
                      <View style={styles.price}>
                          <Text style={{fontSize:17}}>{ed.price} тг</Text>
                     </View>
            </View>
            )}
           </Tab>
           <Tab style={{marginTop:10}} heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>Шашлыки</Text></TabHeading>}>
           {eda.salat.map((ed,index)=>
            <View style={styles.menu} key={index}>
                <View style={{marginBottom:10}}>
                      <View style={{alignSelf:'flex-start',marginBottom:5,width:285}} >
                        <Text style={{fontSize:17}}>{ed.name}</Text>
                      </View>
                    <View style={{width:280}}>
                        <View>
                          <Text style={{fontSize:12}}>{ed.opisanie}</Text>
                        </View>
                            <View>
                              <Text style={{fontSize:12}}>Калорийность: {ed.kal}</Text>
                         </View>
                     </View>
                </View>
                      <View style={styles.price}>
                          <Text style={{fontSize:17}}>{ed.price} тг</Text>
                     </View>
            </View>
            )}
           </Tab>
           <Tab style={{marginTop:10}} heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>Напитки</Text></TabHeading>}>
           {eda.salat.map((ed,index)=>
            <View style={styles.menu} key={index}>
                <View style={{marginBottom:10}}>
                      <View style={{alignSelf:'flex-start',marginBottom:5,width:285}} >
                        <Text style={{fontSize:17}}>{ed.name}</Text>
                      </View>
                    <View style={{width:280}}>
                        <View>
                          <Text style={{fontSize:12}}>{ed.opisanie}</Text>
                        </View>
                            <View>
                              <Text style={{fontSize:12}}>Калорийность: {ed.kal}</Text>
                         </View>
                     </View>
                </View>
                      <View style={styles.price}>
                          <Text style={{fontSize:17}}>{ed.price} тг</Text>
                     </View>
            </View>
            )}
           </Tab>
           <Tab style={{marginTop:10}} heading={<TabHeading style={{backgroundColor:'white'}}><Text style={{fontSize:14,color:'black'}}>Алкоголь</Text></TabHeading>}>
           {eda.salat.map((ed,index)=>
            <View style={styles.menu} key={index}>
                <View style={{marginBottom:10}}>
                      <View style={{alignSelf:'flex-start',marginBottom:5,width:285}} >
                        <Text style={{fontSize:17}}>{ed.name}</Text>
                      </View>
                    <View style={{width:280}}>
                        <View>
                          <Text style={{fontSize:12}}>{ed.opisanie}</Text>
                        </View>
                            <View>
                              <Text style={{fontSize:12}}>Калорийность: {ed.kal}</Text>
                         </View>
                     </View>
                </View>
                      <View style={styles.price}>
                          <Text style={{fontSize:17}}>{ed.price} тг</Text>
                     </View>
            </View>
            )}
           </Tab>
       </Tabs>
   </Container>

            </ScrollView>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    price:{
        alignSelf:'flex-start',
        width:70
    },
    menu:{
        flexDirection:'row',
        borderColor:'#ccc',
        marginLeft:5,
        borderBottomWidth:1,
        marginBottom:15,
        borderBottomEndRadius:15,
        borderBottomStartRadius:5
      },
})

export default Menu;