import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CounterButton from './CounterButton';


const Counter = props => {

    let [ num, setNum ] = useState(0);
    
    const onPress_Increase = () => {
        setNum(num + 1);
    }

    const onPress_Decrease = () => {
        if (num > -15) {
            setNum(num - 1);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{num}</Text>
            <View style={styles.buttonsContainer}>
                <CounterButton 
                    buttonText="ARTTIR"
                    onPressButton={onPress_Increase} />
                <CounterButton 
                    buttonText="AZALT"
                    onPressButton={onPress_Decrease} />
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
