import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const Notes = ({navigation}) => {
    return(
        <View>
        <Header navigation={navigation} />
            <Text>Notes</Text>
        </View>
    )
};

export default Notes;