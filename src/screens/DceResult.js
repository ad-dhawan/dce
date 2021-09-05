import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const DceResult = ({navigation}) => {
  return (
    <View>
    <Header iconName="arrow-back" onPressIcon={() => navigation.goBack()} />

      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <ContentView url="https://dronacharya.info/ggnresults/GetResult.aspx" />
      </View>
    </View>
  );
};

export default DceResult;
