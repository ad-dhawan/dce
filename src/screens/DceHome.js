import React from 'react';
import {View, Text} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const DceHome = ({navigation}) => {
  return (
    <View>
    <Header iconName="arrow-back" onPressIcon={() => navigation.goBack()} />

      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <ContentView url="https://ggnindia.dronacharya.info/" />
      </View>
    </View>
  );
};

export default DceHome;
