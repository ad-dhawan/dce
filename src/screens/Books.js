import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const Books = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>Books</Text>
        </View>
    )
};

export default Books;