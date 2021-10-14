import React from 'react';
import { Text } from 'react-native';


const asyncFunc = async () => {
    // throw new Error('Hataaa');

    /*
    console.log('before fetch line')
    await fetch('https://www.google.com');
    console.log('after fetch line')
    */

    /*
    const googleResponse = await fetch('https://www.google.com').then((response) => {
        return response;
    })

    console.log('google response', googleResponse);
    */

    return fetch('https://www.google.com');
};

const AsyncAwait = props => {

    const returnedValue = asyncFunc(); // Burası Promise döner.
    console.log(returnedValue);

    asyncFunc()
        .then((response) => {
            console.log('then response:', response)
        })
        .catch((error) => {
            console.log('catch error: ', error.message)
        })
        .finally(() => {
            console.log('finally')
        })

    return (
        null
    );
};

export default AsyncAwait;
