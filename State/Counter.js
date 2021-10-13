import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

/*
// Array destructering açıklaması
const arr = [
    {id: 0},
    () => {},
]

// aşağıdaki iki şey aynı
// 1
const [obj, func] = arr;
// 2
const obj = arr[0];
const func = arr[1];
*/


const Counter = props => {

    // Array destructuring
    let [ num, setNum ] = useState(0);

    // const [ degiskenAdi, degiskenDegistirmeFonks ] = useState(baslangicDegeri);
    
    const onPress_Increase = () => {
        console.log('Arttıra basıldı')
        console.log('eski değer', num);
        setNum(num + 1);
        console.log('yeni değer', num);
    }

    const onPress_Decrease = () => {
        console.log('Azalta basıldı');
        // setNum(num - 1);

        if (num > -15) {
            setNum(num - 1);
        }
    }

    const renderNumPad = () => {
        let numComponents = [];
        for (let i = 1; i < 10; i++) {
            numComponents.push(
                <Text key={i}>1</Text>
            )
        }

        return numComponents;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{num}</Text>
            <View style={styles.buttonsContainer}>
                <View>
                    {renderNumPad()}
                </View>
                <TouchableOpacity style={styles.touchable} onPress={onPress_Increase}>
                    <Text style={styles.buttonText}>ARTTIR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable} onPress={onPress_Decrease}>
                    <Text style={styles.buttonText}>AZALT</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    numberText: {
        fontSize: 200,
        color: 'lightgreen',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    touchable: {
        height: 50,
        width: 150,
        backgroundColor: 'orange',
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '700',
    },
})

export default Counter;
