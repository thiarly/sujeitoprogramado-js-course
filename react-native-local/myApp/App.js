import React from "react";
import { View, Text, Image } from "react-native";

function App(){

    let nome = 'Thiarly Cavalcante';
    let img = 'https://sujeitoprogramador.com/steve.png';
    let img_react = 'https://sujeitoprogramador.com/reactlogo.png';

    return(
        <View>
            <Text style={{color: 'red', margin: 5, fontSize: 20}}>My App</Text>
            <Text style={{color: 'blue', margin: 5, fontSize: 30}}>Meu first App</Text>
            <Text style={{color: 'green', margin: 5, fontSize: 40}}>Meu Seconds App</Text>

            <Image
            source={{uri: img }}
             style={{width: 200, height: 200, margin: 5}}/>

            <Image
            source={{uri: img_react }}
             style={{width: 200, height: 200, margin: 5}}/>

             <Text style={{color: 'red', margin: 5, fontSize: 25}}>{nome}</Text>

        </View>
    )
}


export default App;







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
