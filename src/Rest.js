import React from 'react';
import { SafeAreaView, FlatList, StyleSheet} from 'react-native';
import {DATA} from './data';
import Card from './ttest';


const Rest = ({navigation}) => {
  const renderItem = ({item}) => {
    return(
    <Card
        itemData={item}
        onPress={() => navigation.navigate('Cardtwo',{itemData:item})}
    />
    )
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'90%',
    alignSelf:'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Rest;