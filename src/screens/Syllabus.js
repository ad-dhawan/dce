import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import Pdf from 'react-native-pdf';

import Header from '../components/Header';

const PdfView = props => {
  return (
    <View style={styles.pdfContainer}>
      <Pdf
        source={{
          uri: props.source,
          cache: true,
        }}
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

const Syllabus = ({navigation}) => {
  const [source, setSource] = useState('');
  const [domain, setDomain] = useState('');
  const [batch, setBatch] = useState('');

  useEffect(() => {
    if (domain === 'CSE' && batch === 3)
      setSource(
        'https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-38-44_B.Tech%20CSE%203rd%20year.pdf',
      );
    else if (domain === 'ECE' && batch === 3)
      setSource(
        'https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-42-37_B.Tech%20ECE%203rd%20year.pdf',
      );
    else if (domain === 'CE' && batch === 3)
      setSource(
        'https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-37-41_B.Tech%20Civil%203rd%20year.pdf',
      );
    else if (domain === 'CSIT' && batch === 3)
      setSource(
        'https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-40-01_B.Tech%20CSIT%203rd%20year.pdf',
      );
    else if (domain === 'IT' && batch === 3)
      setSource(
        'https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-51-29_B.Tech%20IT%203rd%20Year.pdf',
      );
    else if (domain === 'ME' && batch === 3)
      setSource(
        'https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-52-44_B.Tech%20ME%203rd%20year.pdf',
      );
    else if (domain === 'CSE' && batch === 2)
      setSource('');
  });

  return (
    <View>
      <Header navigation={navigation} />

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

      <View style={{width: '100%', height: '100%'}}>
        <PdfView source={source} />
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

export default Syllabus;
