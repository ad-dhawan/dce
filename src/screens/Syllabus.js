import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import Pdf from 'react-native-pdf';

import Header from '../components/Header';
import {
  YEAR1,
  CSE2,
  ECE2,
  ME2,
  CSE3,
  IT3,
  CSIT3,
  ECE3,
  CE3,
  ME3,
  CSE4,
  ECE4,
  ME4,
  CE2,
  CE4
} from '../utils/values';

const Syllabus = ({navigation}) => {
  const [source, setSource] = useState('');
  const [domain, setDomain] = useState('');
  const [batch, setBatch] = useState('');

  useEffect(() => {
    if (domain === 'CSE' && batch === 1) setSource(YEAR1);
    else if (domain === 'IT' && batch === 1) setSource(YEAR1);
    else if (domain === 'CSIT' && batch === 1) setSource(YEAR1);
    else if (domain === 'ECE' && batch === 1) setSource(YEAR1);
    else if (domain === 'CE' && batch === 1) setSource(YEAR1);
    else if (domain === 'ME' && batch === 1) setSource(YEAR1);
    else if (domain === 'CSE' && batch === 2) setSource(CSE2);
    else if (domain === 'IT' && batch === 2) setSource('');
    else if (domain === 'CSIT' && batch === 2) setSource('');
    else if (domain === 'ECE' && batch === 2) setSource(ECE2);
    else if (domain === 'CE' && batch === 2) setSource(CE2);
    else if (domain === 'ME' && batch === 2) setSource(ME2);
    else if (domain === 'CSE' && batch === 3) setSource(CSE3);
    else if (domain === 'ECE' && batch === 3) setSource(ECE3);
    else if (domain === 'CE' && batch === 3) setSource(CE3);
    else if (domain === 'CSIT' && batch === 3) setSource(CSIT3);
    else if (domain === 'IT' && batch === 3) setSource(IT3);
    else if (domain === 'ME' && batch === 3) setSource(ME3);
    else if (domain === 'CSE' && batch === 4) setSource(CSE4);
    else if (domain === 'IT' && batch === 4) setSource('');
    else if (domain === 'CSIT' && batch === 4) setSource('');
    else if (domain === 'ECE' && batch === 4) setSource(ECE4);
    else if (domain === 'CE' && batch === 4) setSource(CE4);
    else if (domain === 'ME' && batch === 4) setSource(ME4);
  });

  const PdfView = props => {
    return (
      <View style={styles.pdfContainer}>
        <Pdf
          source={
            batch === 2 || batch === 4
              ? props.source
              : {
                  uri: props.source,
                  cache: true,
                }
          }
          onLoadComplete={numberOfPages => {
            console.log(`number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          onPressLink={uri => {
            console.log(`Link presse: ${uri}`);
          }}
          style={{flex: 1, width: '100%', height: '100%'}}
        />
      </View>
    );
  };

  return (
    <View>
    <Header iconName="arrow-back" onPressIcon={() => navigation.goBack()} />

      <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
        <View style={styles.chipContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Chip
              mode="outlined"
              selected={domain === 'CSE' ? true : false}
              style={styles.chip}
              onPress={() => setDomain('CSE')}>
              CSE
            </Chip>
            <Chip
              mode="outlined"
              selected={domain === 'IT' ? true : false}
              style={styles.chip}
              onPress={() => setDomain('IT')}>
              IT
            </Chip>
            <Chip
              mode="outlined"
              selected={domain === 'CSIT' ? true : false}
              style={styles.chip}
              onPress={() => setDomain('CSIT')}>
              CSIT
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
          </ScrollView>
        </View>

        <View style={styles.chipContainer}>
          <Chip
            mode="outlined"
            selected={batch === 1 ? true : false}
            style={styles.chip}
            onPress={() => setBatch(1)}>
            1 Year
          </Chip>
          <Chip
            mode="outlined"
            selected={batch === 2 ? true : false}
            style={styles.chip}
            onPress={() => setBatch(2)}>
            2 Year
          </Chip>
          <Chip
            mode="outlined"
            selected={batch === 3 ? true : false}
            style={styles.chip}
            onPress={() => setBatch(3)}>
            3 Year
          </Chip>
          <Chip
            mode="outlined"
            selected={batch === 4 ? true : false}
            style={styles.chip}
            onPress={() => setBatch(4)}>
            4 Year
          </Chip>
        </View>
      </View>

      {source === '' ? (
        <View
          style={{
            width: '100%',
            height: '50%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', letterSpacing: 1}}>
            No Data
          </Text>
        </View>
      ) : (
        <View style={{width: '100%', height: '100%'}}>
          <PdfView source={source} />
        </View>
      )}
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

export default Syllabus;
