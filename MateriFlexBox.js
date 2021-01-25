import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#03506f',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
          }}>
          <View style={{backgroundColor: '#e7e7de', width: 50, height: 50}} />
          <View style={{backgroundColor: '#008891', width: 50, height: 50}} />
          <View style={{backgroundColor: '#00587a', width: 50, height: 50}} />
          <View style={{backgroundColor: '#0f3057', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Android</Text>
          <Text>Video</Text>
          <Text>Komunitas</Text>
          <Text>Playlist</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{
              uri: 'https://reactjs.org/logo-og.png',
            }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 14,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Hijrah Assalam
            </Text>
            <Text>100rb Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;
