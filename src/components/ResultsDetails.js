import React from 'react';
import {View, Text, StyleSheet,Image, FlatList} from 'react-native';


const ResultsDetails = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
          <Text style = {styles.names}>{result.name}</Text>  
            <Text>
             {result.rating} Stars, {result.review_count} Reviews
             </Text>
       
    </View>
    );
};
const styles = StyleSheet.create({
    container:{
        marginLeft:15

    },
    image:{
        width:150,
        height:80,
        borderRadius:4,
        marginBottom:5
    },
    names:{
        fontWeight:'bold'
        
    }
   

});
 export default ResultsDetails;