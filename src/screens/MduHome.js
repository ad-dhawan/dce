import React from 'react';
import {View} from 'react-native';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

const MduHome = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />

<View style={{width: '100%', height: '100%', justifyContent: 'center'}}>
  <ContentView url="https://mdu.ac.in/" />
</View>
        </View>
    )
};

export default MduHome;