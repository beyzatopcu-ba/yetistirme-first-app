import React from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const ShoppingList = props => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>ALIŞVERİŞ LİSTESİ</Text>
                </View>
                <View>
                    <TextInput 
                    placeholder="Yazmaya başlayın..."/>
                </View>
                <TouchableOpacity>
                    <Text>EKLE</Text>
                </TouchableOpacity>
                <Text>Alınacaklar</Text>
                <View>
                    {/* Kutucuk */}
                    <View />
                    <Text>Ekmek</Text>
                    {/* Buton */}
                    <TouchableOpacity>
                        <Text>Sil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {

    },
    container: {

    },
    headerContainer: {

    },
    headerText: {

    },
});

export default ShoppingList;
