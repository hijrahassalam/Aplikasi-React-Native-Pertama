import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import macbook from '../../assets/image/macbook.jpg';

const Product = (props) => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={macbook} style={styles.imageProduct} />
        <Text style={styles.productTitle}>Macbook Pro 2020</Text>
        <Text style={styles.productPrice}>Rp. 25.000.000</Text>
        <Text style={styles.location}>Solo Utara</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  productTitle: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#F2994A',
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#51c2d5',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
});
