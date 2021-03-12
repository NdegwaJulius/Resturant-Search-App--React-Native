import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetails from './ResultsDetails';


const ResultsList = ({title, results }) => {
    return(
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>  
          <FlatList
          horizontal  ={true}
          showsHorizontalScrollIndicator={false}
          data= {results}
          keyExtractor={(result) => result.id}
          renderItem={({item}) => {
            return <ResultsDetails result={item}/>;
          }}
          />
       
    </View>
    );
};
const styles = StyleSheet.create({
    title:{
        fontSize:18,
        marginLeft:15,
        fontWeight:'bold',
        marginBottom:5
    },
    container:{
        marginBottom:10
    }

});
 export default ResultsList;