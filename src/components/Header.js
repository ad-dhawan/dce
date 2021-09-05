import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { PRIMARY } from '../utils/colors';

const Header = props => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView>
        <View style={styles.componentsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={props.onPressIcon}>
            <Ionicons name={props.iconName} size={32} color="white" />
          </TouchableOpacity>
          <Image
            source={require('../assets/dronacharya-logo.png')}
            style={styles.logo}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    // height: '100%',
    backgroundColor: PRIMARY,
  },
  componentsContainer: {
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 15,
    flexDirection: 'row',
  },
  logo: {
    width: 150,
    height: 30,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Header;
