import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, TextInput, SafeAreaView, FlatList } from 'react-native';

const ShoppingListWithApi = props => {

    const [ text, setText ] = useState('');
    const [ shoppingList, setShoppingList ] = useState([]);

    useEffect(() => {
        // Component did mount
        // API'den listeyi isteyeceğim.

        fetch('https://rem-rest-api.herokuapp.com/api/items?limit=50', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            return response.json();
        })
        .then(jsonData => {
            setShoppingList(jsonData.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, []);

    const onChangeText_Item = (text) => {
        setText(text);
    }

    const onPress_Add = () => {

        const itemObj = {
            name: text,
        }

        // Eklenecek text'i API'ye post et
        fetch('https://rem-rest-api.herokuapp.com/api/items', {
            method: 'POST',
            body: JSON.stringify(itemObj),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log('is ok', response.ok, 'status code', response.status);
            if (response.ok) {
                let copyShoppingList = [...shoppingList];
                copyShoppingList.push(itemObj);
                setShoppingList(copyShoppingList);
            }
            return response.json();
        })
        .then(jsonData => {
            console.log('response json', jsonData);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const deleteItem = (item, index) => {
        fetch('https://rem-rest-api.herokuapp.com/api/items/' + item.id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                console.log('delete successful')
                let copyShoppingList = [...shoppingList];
                copyShoppingList.splice(index, 1);
                setShoppingList(copyShoppingList);
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    const renderItem = (params) => {
        const item = params.item;
        const index = params.index;

        return (
            <TouchableOpacity onPress={() => deleteItem(item, index)}>
                <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder={"İtem adı yaz"} 
                onChangeText={onChangeText_Item}/>
            <TouchableOpacity style={styles.button} onPress={onPress_Add}>
                <Text style={styles.buttonText}>EKLE</Text>
            </TouchableOpacity>
            <View style={styles.listContainer}>
                <FlatList
                    data={shoppingList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => { return index; }}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 40,
        backgroundColor: 'rgb(230,230,230)',
        marginBottom: 10,
        marginTop: 50,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: 'orange',
        height: 60,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
    listContainer: {
        width: 300,
    },
    itemText: {
        fontSize: 16,
        marginBottom: 5,
    },
};

export default ShoppingListWithApi;
