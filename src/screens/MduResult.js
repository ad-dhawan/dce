import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const MduResult = ({navigation}) => {
  return (
    <View>
    <Header iconName="arrow-back" onPressIcon={() => navigation.goBack()} />

      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <ContentView url="http://result.mdurtk.in/postexam/result.aspx" />
      </View>
    </View>
  );
};

export default MduResult;
