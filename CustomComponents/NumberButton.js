import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const NumberButton = props => {
    return (
        <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>{props.number}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: 'grey',
        borderRadius: 100,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    text: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
    },
})

export default NumberButton;
