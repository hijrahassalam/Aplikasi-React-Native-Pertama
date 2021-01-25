import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../../assets/icons/cart.png';

export default function Position() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {padding: 20, alignItems: 'center'},
  iconCart: {width: 50, height: 50},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#0a043c',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#16c79a',
    padding: 4,
    width: 24,
    height: 24,
    borderRadius: 25,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
