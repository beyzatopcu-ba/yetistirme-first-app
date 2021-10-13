import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {

    const yellowBoxStyles = [
        styles.square,
        {
            backgroundColor: 'yellow',
        }
    ];

    const whiteBoxStyles = [
        styles.square,
        {
            backgroundColor: 'white',
        }
    ]

    const greenBoxStyles = [
        styles.square,
        {
            backgroundColor: 'lightgreen',
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.square}></View>
            <View style={yellowBoxStyles} />
            <View style={whiteBoxStyles} />
            <View style={greenBoxStyles} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        // width: 100,
        // height: 200,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    square: {
        backgroundColor: 'lightblue',
        width: 30,
        height: 30,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        margin: 10,
    },
});

export default App;