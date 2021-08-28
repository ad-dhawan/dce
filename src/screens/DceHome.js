import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const DceHome = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>DceHome</Text>
        </View>
    )
};

export default DceHome;