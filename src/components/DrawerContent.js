import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Drawer, Caption} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
              icon={() => (
                <Icon name="account-outline" color="#000" size={20} />
              )}
              label="Result"
              onPress={() => {
                props.navigation.navigate('MduResult');
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="account-outline" color="#000" size={20} />
              )}
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
              icon={() => (
                <Icon name="account-outline" color="#000" size={20} />
              )}
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
                <Icon name="home-outline" color="#000" size={20} />
              )}
              label="Student Portal"
              onPress={() => {
                props.navigation.navigate('StudentPortal');
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="account-outline" color="#000" size={20} />
              )}
              label="Books"
              onPress={() => {
                props.navigation.navigate('Books');
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="account-outline" color="#000" size={20} />
              )}
              label="Previous Year Paper"
              onPress={() => {
                props.navigation.navigate('PrevYearPaper');
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon name="account-outline" color="#000" size={20} />
              )}
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
