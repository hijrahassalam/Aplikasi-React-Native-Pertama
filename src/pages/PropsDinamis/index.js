import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri: props.image,
        }}
        style={{width: 100, height: 100, borderRadius: 100 / 2}}
      />
      <Text style={{maxWidth: 50}}>{props.title}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Props Dinamis</Text>
      <View style={{flexDirection: 'row'}}>
        <Story
          title="Angular JS"
          image="https://miro.medium.com/max/1200/1*15CYVZdpsxir8KLdxEZytg.png"
        />
        <Story
          title="Vue JS"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVrsFfKrGLFGPQR1vSVcTuZZJjuVf2vRfeQ&usqp=CAU"
        />
      </View>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
