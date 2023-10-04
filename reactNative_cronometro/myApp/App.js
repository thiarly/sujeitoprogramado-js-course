import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";


let time = null;
let ss = 0;
let mm = 0;
let hh = 0;


export default function App(){
  const [numero, setNumero] = useState(0)
  const [botao, setBotao] = useState('VAI')
  const [ultimo, setUltimo] = useState(null)

  function vai(){
    if(time !== null){
      clearInterval(time);
      time = null;
      setBotao('VAI')
  }else{
    time = setInterval(() => {
      ss++;

      if(ss == 60){
        ss = 0;
        mm++;
      }

      if(mm == 60){
        mm = 0;
        hh++;
      }

      let format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
      setNumero(format);
    }, 1000);
    setBotao('PARAR')
  }};

  function limpar(){
    if (time !== null){
      clearInterval(time);
      time = null;
    }

    setUltimo(numero);
    setNumero(0);
    ss = 0;
    mm = 0;
    hh = 0;
    setBotao('VAI');
  }

  return (
    <View style={styles.container}>

    <Image 
    source={require('./src/crono.png')}  
    />

    <Text style={styles.timer}>{numero}</Text>
   
      
    
    <View style={styles.btnArea}>
    <TouchableOpacity style={styles.btn} onPress={vai}>
      <Text style={styles.btnTexto}>{botao}</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.btn} onPress={limpar}>
      <Text style={styles.btnTexto}>LIMPAR</Text>
    </TouchableOpacity>
    </View>

    <View style={styles.areaUltima}>
      <Text style={styles.textoCorrido}>
        {ultimo ? 'Ultimo tempo: ' + ultimo : ' '}
      </Text>

    </View>


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
  timer:{
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 140,
    height: 40,
  },
  btn:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    margin: 17,
    height: 40,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40,
  },
  textoCorrido:{
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }

});