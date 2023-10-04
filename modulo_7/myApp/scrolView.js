import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function scroll() {
    return (
        <View style={styles.container}>
        
       <ScrollView horizontal={true}>
            <View style={styles.box1} ></View>
            <View style={styles.box2} ></View>
            <View style={styles.box3} ></View>
            <View style={styles.box4} ></View>
        </ScrollView>

        <ScrollView showsVerticalScrollIndicator={true}>
            <View style={styles.box1} ></View>
            <View style={styles.box2} ></View>
            <View style={styles.box3} ></View>
            <View style={styles.box4} ></View>
        </ScrollView>
        
        </View>
        

            
    );
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    box1:{
        width: 200,
        height: 250,
        backgroundColor: 'yellow'
    },
    box2:{
        width: 200,
        height: 250,
        backgroundColor: 'gray',
    },
    box3:{
        width: 200,
        height: 250,
        backgroundColor: 'blue'
    },
    box4: {
        width: 200,
        height: 250,
        backgroundColor:'red'
    }
})

