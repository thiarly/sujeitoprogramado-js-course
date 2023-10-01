import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";



function App(){

    let nome = 'Thiarly Cavalcante';


    return(
        <View>
            <Text style={styless.texto1}>My App</Text>
            <Text style={stylesss.texto2}>Meu first App</Text>

            <Logo largura={400} altura={500} fulano="Thiarly Cavalcante"/>

        </View>
    )
}

export default App;

function Logo(props){
    let img = 'https://sujeitoprogramador.com/steve.png';
    return(

        <View>
        <Text style={styles.texto}>{props.fulano}</Text>
        <Image source= {{uri: img }} style={{width: props.largura, height: props.altura, margin: 5}}/>
        </View>
    );
}


const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
        color: 'red',
        textAlign: 'center',
    },
});

const styless = StyleSheet.create({
    texto1: {
        fontSize: 50,
        color: 'green',
        textAlign: 'center',
    },
});


const stylesss = StyleSheet.create({
    texto2: {
        fontSize: 30,
        color: 'blue',
        textAlign: 'center',
    },
});






// import React, {Component} from "react";
// import { View, Text } from "react-native";

// class App extends Component{
//     render(){
//         return(
//         <View>
//             <Text>My App</Text>
//             <Text>Meu first App</Text>
//             <Text>Meu Seconds App</Text>
//         </View>
//         )
//     }
// }


// export default App;
