import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const Syllabus = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>Syllabus</Text>
        </View>
    )
};

export default Syllabus;