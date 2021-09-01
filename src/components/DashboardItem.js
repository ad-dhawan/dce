import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CategoryItem from './CategoryItem';

const DashboardItem = props => {
  return (
    <View style={styles.categoryContainer}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.divider} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <CategoryItem
          name={props.homeName}
          image={props.homeImage}
          onPress={props.homePress}
        />

        <CategoryItem
          name={props.resultName}
          image={props.resultImage}
          onPress={props.resultPress}
        />

        <CategoryItem
          name={props.syllabusName}
          image={props.syllabusImage}
          onPress={props.syllabusPress}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginVertical: 10,
    marginHorizontal: 12,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
  },
  divider: {
    width: '100%',
    height: 1,
    borderWidth: 1,
    borderColor: '#cccccc90',
    marginVertical: 10,
  },
});

export default DashboardItem;
