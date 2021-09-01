import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import Header from '../components/Header';
import DashboardItem from '../components/DashboardItem';

import {BACKGROUND} from '../utils/colors';
const {width, height} = Dimensions.get('screen');

const MiscItem = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: width / 10}}>
      <Image source={props.image} style={styles.miscImage} />
      <Text style={styles.miscText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const Dashboard = ({navigation}) => {
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: BACKGROUND}}>
        <Header navigation={navigation} />

        <DashboardItem
          title="MDU Official"
          homeName="Home"
          homeImage={require('../assets/university.png')}
          homePress={() => navigation.navigate('MduHome')}
          resultName="Result"
          resultImage={require('../assets/mduResult.png')}
          resultPress={() => navigation.navigate('MduResult')}
          syllabusName="Syllabus"
          syllabusImage={require('../assets/syllabus.png')}
          syllabusPress={() => navigation.navigate('Syllabus')}
        />

        <DashboardItem
          title="DCE Official"
          homeName="Home"
          homeImage={require('../assets/college.png')}
          homePress={() => navigation.navigate('DceHome')}
          resultName="Result"
          resultImage={require('../assets/dceResult.png')}
          resultPress={() => navigation.navigate('DceResult')}
        />

        <View style={styles.miscContainer}>

          <View style={{flexDirection: 'row', marginTop: 10}}>
          <MiscItem
            image={require('../assets/studentPortal.png')}
            name="Student Portal"
            onPress={() => navigation.navigate('StudentPortal')}
          />

          <MiscItem
            image={require('../assets/books.png')}
            name="E-Books"
            onPress={() => navigation.navigate('Books')}
          />
          </View>

          <View style={{flexDirection: 'row', marginTop: 15}}>
          <MiscItem
            image={require('../assets/prevYearPaper.png')}
            name="Prev. Year Papers"
            onPress={() => navigation.navigate('PrevYearPaper')}
          />

          <MiscItem
            image={require('../assets/notes.png')}
            name="Notes"
            onPress={() => navigation.navigate('Notes')}
          />
          </View>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  miscContainer: {
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miscImage: {
    width: width / 5,
    height: width / 5,
  },
  miscText: {
    paddingTop: 8,
    fontSize: 15,
    fontWeight: '500'
  },
});

export default Dashboard;
