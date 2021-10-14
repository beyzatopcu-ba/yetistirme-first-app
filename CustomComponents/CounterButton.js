import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const CounterButton = props => {
    
    return (
        <TouchableOpacity 
            style={styles.touchable} 
            onPress={props.onPressButton} >
            <Text style={styles.buttonText}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
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
});

export default CounterButton;
