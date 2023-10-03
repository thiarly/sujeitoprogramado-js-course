import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    "Siga o seu coração.",
    "Grandes coisas estão por vir.",
    "A paciência é a chave para o sucesso.",
    "Você é mais forte do que pensa.",
    "Cada passo é uma vitória.",
    "Acredite nos seus sonhos.",
    "A jornada é tão importante quanto o destino.",
    "O melhor ainda está por vir.",
    "Sorria, o universo está conspirando a seu favor.",
    "Seu esforço logo será recompensado.",
    "A verdadeira riqueza está dentro de você.",
    "Hoje é o dia perfeito para começar algo novo.",
    "Mude o pensamento e mude o mundo.",
    "Todo desafio é uma oportunidade.",
    "A vida é feita de escolhas. Escolha ser feliz!",
    "Nunca subestime o poder de um pequeno gesto.",
    "A felicidade está nas pequenas coisas.",
    "Seja a mudança que deseja ver no mundo.",
    "Você é a sua melhor versão.",
    "Ame a jornada, não apenas o destino.",
    "Seja a mudança que deseja ver no mundo.",
  ];

  function quebrarBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length);
    setTextoFrase(frases[numeroAleatorio]);
    setImg(require('./src/biscoitoAberto.png'));
    console.log(numeroAleatorio);
  }

  function reiniciarBiscoito() {
    setImg(require('./src/biscoito.png')); 
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      
      
    <Image source={img}
    style={styles.img}
    />

<Text style={styles.textofrase} >{textoFrase ? `"${textoFrase}"` : ""}</Text>

    
    
    <TouchableOpacity onPress={quebrarBiscoito}>
      <View style={styles.btnarea} >
        <Text style={styles.btnbotao} >Quebrar Biscoito</Text>
      </View>
    </TouchableOpacity>  

    <TouchableOpacity onPress={reiniciarBiscoito}>
      <View style={[styles.btnarea, {marginTop: 15, borderColor: '#121212'}]} >
        <Text style={[styles.btnbotao, {color: '#121212'}]} >Reiniciar Biscoito</Text>
      </View>
    </TouchableOpacity>  

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textofrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  btnarea: {
    marginTop: 20,
    width: 230,
    borderColor: '#dd7b22',
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center'
  },
  btnbotao: {
    fontSize: 18,
    textAlign: 'center',
    color: '#dd7b22',
    fontWeight: 'bold'
  }

});

export default App;