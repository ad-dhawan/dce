import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';

import Header from '../components/Header';
import ContentView from '../components/ContentView';

import {CSE, ECE, EEE, ME, CE} from '../utils/values';

const PrevYearPaper = ({navigation}) => {
  const [domain, setDomain] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (domain === 'CSE') setUrl(CSE);
    else if (domain === 'ECE') setUrl(ECE);
    else if (domain === 'EEE') setUrl(EEE);
    else if (domain === 'ME') setUrl(ME);
    else if (domain === 'CE') setUrl(CE);
  });

  return (
    <View>
      <Header iconName="arrow-back" onPressIcon={() => navigation.goBack()} />

      <View style={styles.chipContainer}>
        <Chip
          mode="outlined"
          selected={domain === 'CSE' ? true : false}
          style={styles.chip}
          onPress={() => setDomain('CSE')}>
          CSE
        </Chip>
        <Chip
          mode="outlined"
          selected={domain === 'ECE' ? true : false}
          style={styles.chip}
          onPress={() => setDomain('ECE')}>
          ECE
        </Chip>
        <Chip
          mode="outlined"
          selected={domain === 'EEE' ? true : false}
          style={styles.chip}
          onPress={() => setDomain('EEE')}>
          EEE
        </Chip>
        <Chip
          mode="outlined"
          selected={domain === 'CE' ? true : false}
          style={styles.chip}
          onPress={() => setDomain('CE')}>
          CE
        </Chip>
        <Chip
          mode="outlined"
          selected={domain === 'ME' ? true : false}
          style={styles.chip}
          onPress={() => setDomain('ME')}>
          ME
        </Chip>
      </View>

      <View style={{width: '100%', height: '100%', justifyContent: 'center', marginTop: 10}}>
        <ContentView url={url} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  chip: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 3,
  },
  pdfContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
});

export default PrevYearPaper;
