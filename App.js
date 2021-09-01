import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import {DrawerContent} from './src/components/DrawerContent';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Dashboard from './src/screens/Dashboard';
import MduHome from './src/screens/MduHome';
import MduResult from './src/screens/MduResult';
import Syllabus from './src/screens/Syllabus';
import DceResult from './src/screens/DceResult';
import DceHome from './src/screens/DceHome';
import StudentPortal from './src/screens/StudentPortal';
import Books from './src/screens/Books';
import PrevYearPaper from './src/screens/PrevYearPaper';
import Notes from './src/screens/Notes';

import Header from './src/components/Header';

const Drawer = createDrawerNavigator();

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true});
    });
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        translucent={true}
        backgroundColor={'transparent'}
      />
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
          }}
          drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="MduHome" component={MduHome} />
          <Drawer.Screen name="MduResult" component={MduResult} />
          <Drawer.Screen name="Syllabus" component={Syllabus} />
          <Drawer.Screen name="DceResult" component={DceResult} />
          <Drawer.Screen name="DceHome" component={DceHome} />
          <Drawer.Screen name="StudentPortal" component={StudentPortal} />
          <Drawer.Screen name="Books" component={Books} />
          <Drawer.Screen name="PrevYearPaper" component={PrevYearPaper} />
          <Drawer.Screen name="Notes" component={Notes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
