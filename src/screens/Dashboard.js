import React from 'react';
import {View, Text} from 'react-native'

import Header from '../components/Header';

const Dashboard = ({navigation}) => {
    return(
        <View>
            <Header navigation={navigation} />
            <Text>Dashboard</Text>
        </View>
    )
};

export default Dashboard;