import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Pessoa from './src/Pessoa';



export default function Flat() {
    const [feed, setFeed] = useState([
        {id: 1 , name : "Jhon", age:"20"},
        {id: 2, name: "Carlos", age:"30"},
        {id: 3, name: "Carl", age:"32"},
        {id: 4, name: "los", age:"35"},

        

    ])

    return (

        <View style={styles.container}>

         <FlatList showsVerticalScrollIndicator={false}
         data={feed}
         renderItem={ ({item}) => <Pessoa data={item}/> } 
         />
       
        </View>     
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})

