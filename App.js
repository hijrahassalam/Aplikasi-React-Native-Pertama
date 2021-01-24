import React from 'react';
import {Image, Text, View, TextInput} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#16a085'}} />
      <Text>Hijrah</Text>
      <Text>Assalam</Text>
      <Text>Developers!</Text>
      <Alihsan></Alihsan>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Alihsan = () => {
  return <Text>Developer Hebat Pantang Menyerah! Developer IOS Android!</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
