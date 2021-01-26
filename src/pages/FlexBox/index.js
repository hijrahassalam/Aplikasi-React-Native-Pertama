import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

/* class FlexBox extends Component {
  constructor(props) {
    super(props);
    console.log('==> ini constructor');
    this.state = {
      subscriber: 200,
    };
  }

  componentDidMount() {
    console.log('==> component did mount');
    setTimeout(() => {
      this.setState({
        subscriber: 400,
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('==> component did update');
  }

  componentWillUnmount() {
    console.log('==> component will unmount');
  }

  render() {
    console.log('==> render');
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
              Hijrah Assalam X
            </Text>
            <Text>{this.state.subscriber} rb Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
} */

const FlexBox = () => {
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
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
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
            Hijrah Assalam X
          </Text>
          <Text>200 rb Subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
