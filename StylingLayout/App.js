import React from 'react';
import { View, Text } from 'react-native';

const viewStyles = {

};

const HelloWorldComponent = () => {

  // Yorum
  return (
    <View style={{
      backgroundColor: 'pink',
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'flex-end', // flexDirection ile paralel hizada
      alignItems: 'center', // flexDirection'a dik hizada
    }} >
      {/* Yorum */}
      <Text>Hello World</Text>
    </View>
  );
}

// Tekil export'lar
// Bir sürü tekil export olabilir
export const age = 25;
export const func = () => {
 //alsdl
};


// Default export
// Sadece bir tane default export olur
export default HelloWorldComponent;
