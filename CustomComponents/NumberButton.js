import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const NumberButton = props => {

    const [ isSelected, setIsSelected ] = useState(false);

    const onPress = () => {
        setIsSelected(!isSelected);
        props.onSelectedStateChange(!isSelected, props.number);
    };

    const getTouchableStyles = () => {
        return [
            styles.touchable,
            {
                backgroundColor: isSelected ? 'orange' : 'grey'
            }
        ];
    }

    return (
        <TouchableOpacity
            style={getTouchableStyles()}
            onPress={onPress}>
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
