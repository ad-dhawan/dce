import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const MduHome = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>MduHome</Text>
        </View>
    )
};

export default MduHome;