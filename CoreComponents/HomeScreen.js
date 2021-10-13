import React from 'react';
import { View, StyleSheet, Dimensions, Text, ScrollView, SafeAreaView } from 'react-native';

// Dimension API kullanımı
const dimensions = Dimensions.get('screen');
const width = dimensions.width;
const height = dimensions.height;

// Margin - Padding farkı
// Responsive olsun diye ekran width'i kullanma
const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Text>ANASAYFA</Text>
                </View>
                <ScrollView
                    style={styles.campaignsContainer}
                >
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                    <Text>Kampanya</Text>
                </ScrollView>
                <View style={styles.products} />
                <View style={styles.footer} />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'red',
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: 'pink',
        height: width * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    campaignsContainer: {
        backgroundColor: 'white',
        height: width * 0.5,
        borderColor: 'rgba(0,0,0,0.7)',
        borderWidth: 1,
        borderRadius: 10,
        padding: width * 0.05,
        flexShrink: 0,
    },
    products: {
        backgroundColor: 'orange',
        height: width * 0.5,
        marginHorizontal: 20,
        marginTop: 20,
    },
    footer: {
        backgroundColor: 'lightgreen',
        height: width * 0.3,
        marginBottom: 200,
    },
});

export default HomeScreen;