import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const MduResult = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>MduResult</Text>
        </View>
    )
};

export default MduResult;