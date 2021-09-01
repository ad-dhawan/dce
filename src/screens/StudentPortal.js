import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const StudentPortal = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
        <ContentView url="https://student.mdu.ac.in/index" />
      </View>
    </View>
  );
};

export default StudentPortal;
