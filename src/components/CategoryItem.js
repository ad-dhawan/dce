import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

const CategoryItem = props => {
  return (
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8} style={styles.mainContainer}>
        <Image style={styles.image} source={props.image} />
        <Text style={styles.name}>{props.name}</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  image: {
    width: width / 4.5,
    height: width / 4.5,
  },
  name: {
    paddingTop: 5,
    fontSize: 15,
  },
});

export default CategoryItem;
