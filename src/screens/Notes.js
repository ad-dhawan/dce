import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const Notes = ({navigation}) => {
    return(
        <View>
        <Header iconName="arrow-back" onPressIcon={() => navigation.goBack()} />
            <Text>Notes</Text>
        </View>
    )
};

export default Notes;