import React, {Component} from 'react';
import {Image, Text, View, TextInput} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#16a085'}} />
      <Text>Hijrah</Text>
      <Text>Assalam</Text>
      <Text>Developers!</Text>
      <Alihsan></Alihsan>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>Ini adalah component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 30}}
        />
        <Text
          style={{
            color: 'green',
            fontFamily: 'helvetica',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Ini adalah hewan slur!
        </Text>
      </View>
    );
  }
}

export default SampleComponent;
