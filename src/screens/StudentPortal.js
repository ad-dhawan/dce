import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const StudentPortal = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>StudentPortal</Text>
        </View>
    )
};

export default StudentPortal;