import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Counter = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>0</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.touchable}>
                    <Text style={styles.buttonText}>ARTTIR</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchable}>
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
        fontSize: 300,
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
