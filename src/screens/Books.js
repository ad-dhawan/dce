import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const Books = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <ContentView url="https://drive.google.com/drive/folders/18OfaYdJkp1LiyuF9K1ITLag0TdsoMf_3?usp=sharing" />
      </View>
    </View>
  );
};

export default Books;
