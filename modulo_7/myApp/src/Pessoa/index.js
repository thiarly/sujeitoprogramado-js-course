import React from "react"
import { View, Text, StyleSheet } from "react-native"

function Pessoa(props){
    return(
        <View style={styles.areaPessoa}>
            <Text style={styles.areaTexto}>ID: {props.data.id}</Text>
            <Text style={styles.areaTexto}>Nome: {props.data.name}</Text>
            <Text style={styles.areaTexto}>Idade: {props.data.age}</Text>
        </View>
    )
 }


 const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor:'#123123',
        height: 200,
        marginBottom: 15,
        justifyContent: 'center'
    },
    areaTexto:{
        color: '#fff',
        fontSize: 40,
    }
 })
 
 
 export default Pessoa;
