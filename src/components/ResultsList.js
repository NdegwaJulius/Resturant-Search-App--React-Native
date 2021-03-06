import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
     FlatList,
     TouchableOpacity} from 'react-native';
import {withNavigation } from 'react-navigation';
import ResultsDetails from './ResultsDetails';


const ResultsList = ({title, results,navigation }) => {
    if (!results.length){
        return null;
    }
    return(
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>  
          <FlatList
          horizontal  ={true}
          showsHorizontalScrollIndicator={false}
          data= {results}
          keyExtractor={(result) => result.id}
          renderItem={({item}) => {
            return (
                <TouchableOpacity 
                onPress={()=> navigation.navigate('Results', {id: item.id})}
                
                >
                    <ResultsDetails result={item}/>
                </TouchableOpacity>
            )
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
 export default withNavigation(ResultsList);