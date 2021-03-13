import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
   const id = navigation.getParam('id');
   // add a helper function
   const getResult = async (id) => {
     const response =  await yelp.get (`/${ id }`);
       setResult(response.data);
   };
   useEffect(() => {
       getResult(id);
   }, [] );

   if (!result) {
       return null;
   }

    return(
        <View >
           <Text>{result.name}</Text>
           <FlatList
           data = {result.photos}
           keyExtractor ={(photo) => photo}
           renderItem={({item}) =>{
               return <Image style = {styles.image}
               source = {{uri: item}} />

           }}
           />
    </View>
    );
};
const styles = StyleSheet.create({
   image :{
    width:250,
    height:180,
    borderRadius:4,
    marginBottom:5
   }
});
 export default ResultsShowScreen;