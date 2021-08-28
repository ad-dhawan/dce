import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const DceResult = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>DceResult</Text>
        </View>
    )
};

export default DceResult;