import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={style.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#16a085',
          borderWidth: 2,
          borderColor: 'blue',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={macbook}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Macbook Pro 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#F2994A',
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Solo Utara
        </Text>
        <View
          style={{
            backgroundColor: '#51c2d5',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 12,
              textAlign: 'center',
              color: 'white',
              fontWeight: '600',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    marginTop: 40,
    marginLeft: 20,
    color: '#ec4646',
  },
});

export default StylingComponent;
