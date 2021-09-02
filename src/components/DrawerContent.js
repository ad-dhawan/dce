import React from 'react';
import {View, StyleSheet, Image, Linking} from 'react-native';
import {Drawer, Caption} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Image
            source={require('../assets/dce_logo.png')}
            style={styles.logo}
          />

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialIcons name="dashboard" color="#000" size={20} />
              )}
              label="Dashboard"
              onPress={() => {
                props.navigation.navigate('Dashboard');
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <Caption style={styles.drawerTitle}>MDU Official</Caption>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color="#000" size={20} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('MduHome');
              }}
            />
            <DrawerItem
              icon={() => <Foundation name="results" color="#000" size={20} />}
              label="Result"
              onPress={() => {
                Linking.openURL('http://result.mdurtk.in/postexam/result.aspx');
              }}
            />
            <DrawerItem
              icon={() => <Entypo name="open-book" color="#000" size={20} />}
              label="Syllabus"
              onPress={() => {
                props.navigation.navigate('Syllabus');
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <Caption style={styles.drawerTitle}>DCE Official</Caption>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color="#000" size={20} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('DceHome');
              }}
            />
            <DrawerItem
              icon={() => <Foundation name="results" color="#000" size={20} />}
              label="Result"
              onPress={() => {
                props.navigation.navigate('DceResult');
              }}
            />
          </Drawer.Section>

          <Drawer.Section style={styles.drawerSection}>
            <Caption style={styles.drawerTitle}>Misc</Caption>
            <DrawerItem
              icon={({color, size}) => (
                <FontAwesome5 name="user-graduate" color="#000" size={20} />
              )}
              label="Student Portal"
              onPress={() => {
                props.navigation.navigate('StudentPortal');
              }}
            />
            <DrawerItem
              icon={() => <FontAwesome name="book" color="#000" size={20} />}
              label="Books"
              onPress={() => {
                props.navigation.navigate('Books');
              }}
            />
            <DrawerItem
              icon={() => (
                <Ionicons name="md-newspaper-sharp" color="#000" size={20} />
              )}
              label="Previous Year Paper"
              onPress={() => {
                props.navigation.navigate('PrevYearPaper');
              }}
            />
            <DrawerItem
              icon={() => <Ionicons name="pencil" color="#000" size={20} />}
              label="Notes"
              onPress={() => {
                props.navigation.navigate('Notes');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logo: {
    marginTop: 30,
    marginBottom: 30,
  },
  drawerSection: {
    marginTop: 0,
  },
  drawerTitle: {
    fontWeight: '500',
    paddingHorizontal: 20,
  },
});
