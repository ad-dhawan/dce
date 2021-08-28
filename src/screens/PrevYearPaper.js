import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const PrevYearPaper = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>PrevYearPaper</Text>
        </View>
    )
};

export default PrevYearPaper;