import React, { useState } from "react";

import {View, Text, TextInput, StyleSheet, Button} from "react-native";

function App() {
  const [nome, SetNome] = useState('');
  const [input, SetInput] = useState('');

  function entrar(){

    if (input === ""){
      alert("Digite seu nome!");
      return;
    }

    SetNome(input);
  }

return (
    <View style={styles.container}>
        
        
        <TextInput 
        style={styles.input}
        placeholder="Digite seu nome"
        onChangeText={ (texto) => SetInput(texto) }
        />

        <Button style={styles.botao} title="Entrar" onPress={ entrar } />

      <Text style={styles.saudacaoTexto}>
        {nome ? "Bem Vindo: " : ''}
        <Text style={styles.nomeTexto}>{nome}</Text>
      </Text>

    </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    input:{
        height:45,
        borderWidth:1,
        margin:10,
        padding:10,
        fontSize:20,
    },
    nomeTexto:{
      fontSize:30,
      textAlign:'center',
      color:'blue',
      fontWeight:'bold'
    }, 

    saudacaoTexto: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    botao:{
        width:200,
        height:50,
        backgroundColor:'red',
        borderRadius:25,
        justifyContent:'center',
        marginTop:10
    },
});

export default App;