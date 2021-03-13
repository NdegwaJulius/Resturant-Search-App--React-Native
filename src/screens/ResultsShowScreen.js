import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
   const id = navigation.getParam('id');
   // add a helper function
   const getResult = async (id) => {
       await yelp.get ('/${id}')
       setResult(response.data);
   };
   useEffect(() => {
       getResult(id);
   } );
    return(
        <View >
           <Text>Results showing screens</Text>
    </View>
    );
};
const styles = StyleSheet.create({
   
});
 export default ResultsShowScreen;