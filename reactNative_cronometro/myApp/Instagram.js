import React, {useState} from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';

import Header from './src/Header';
import List from './src/List';


export default function App(){
  const [feed, setFeed] = useState([
    {
      // criar um array nesse formato:
      id: '1', // id do post
      nome: 'Lucas Silva', // nome do usuario
      descricao: 'Mais um dia de muitos bugs, vamos para mais um dia de muito estudo e trabalho :)', // descrição do post
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', // imagem do usuario
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png', // imagem do post
      likeada: <i class="fas fa-tire-rugged    "></i>, // se o usuario deu like
      likers: 32 // quantidade de likes
    },
      // criar mais 5 arrays com esse formato
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 1
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao: 'Bora trabalhar Haha',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 32

    },

    {
      id: '4',
      nome: 'Jo Augus',
      descricao: 'Trabalhar Haha',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0
    },
    {
      id: '5',
      nome: 'J Agus',
      descricao: 'Trabalhar Haha',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 0
    }
  ])


  return (
    <View style={styles.container}>
      <Header />

      <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      data = {feed}
      renderItem={({item}) => <List data={item} />}

      />
    </View>
  );
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  })