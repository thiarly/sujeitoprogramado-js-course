import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


export default function App(){
  return (
    <View style={styles.container}>

    <Image 
    source={require('./src/crono.png')}  
    />

    <Text style={styles.timer}>00:00:00</Text>
    <View style={styles.btnArea}>
      
    </View>
    <TouchableOpacity>
      <Text>Vai</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text>Limpar</Text>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});