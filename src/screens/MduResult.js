import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const MduResult = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <ContentView url="http://result.mdurtk.in/postexam/result.aspx" />
      </View>
    </View>
  );
};

export default MduResult;
