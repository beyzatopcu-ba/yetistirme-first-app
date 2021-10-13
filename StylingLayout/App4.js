import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

const dimensions = Dimensions.get('screen');
const width = dimensions.width;
const height = dimensions.height;

// flex, flexShrink, flexGrow
const App = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>ANASAYFA</Text>
            </View>
            <View style={styles.campaignsContainer}>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
                <Text>Kampanya</Text>
            </View>
            <View style={styles.products} />
            <View style={styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.1)',
        flex: 0.5,
    },
    header: {
        backgroundColor: 'pink',
        // flex: 10,
        height: width * 0.2,
    },
    campaignsContainer: {
        backgroundColor: 'white',
        // flex: 30,
        height: width * 0.3,
    },
    products: {
        backgroundColor: 'orange',
        // flex: 45,

        // flexShrink
        height: width,
        flexShrink: 1,

        // flexGrow
        // flexGrow: 1,
    },
    footer: {
        backgroundColor: 'lightgreen',
        // flex: 15,
        height: width * 0.2,
    },
});

export default App;