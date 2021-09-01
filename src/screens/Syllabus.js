import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import Pdf from 'react-native-pdf';

import Header from '../components/Header';

const PdfView = (props) => {
  return (
    <View style={styles.pdfContainer}>
      <Pdf
        source={{
          uri: props.source,
          cache: true,
        }}
        onLoadComplete={(numberOfPages) => {
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
    const [source, setSource] = useState('https://mdu.ac.in/UpFiles/UpPdfFiles/2021/Jan/4_01-07-2021_15-38-44_B.Tech%20CSE%203rd%20year.pdf')
    const [domain, setDomain] = useState('CSE');
    const [batch, setBatch] = useState('2')

  return (
    <View>
      <Header navigation={navigation} />

      <View style={{marginHorizontal: 10, justifyContent: 'center'}}>
        <View style={styles.chipContainer}>
          <Chip mode="outlined" selected={true} style={styles.chip}>
            CSE
          </Chip>
          <Chip mode="outlined" selected={false} style={styles.chip}>
            ME
          </Chip>
          <Chip mode="outlined" selected={false} style={styles.chip}>
            ECE
          </Chip>
          <Chip mode="outlined" selected={false} style={styles.chip}>
            CE
          </Chip>
        </View>

        <View style={styles.chipContainer}>
          <Chip mode="outlined" selected={false} style={styles.chip}>
            {/* <SubScriptText base="1" exponent="st" /> */}
            1 Year
          </Chip>
          <Chip mode="outlined" selected={true} style={styles.chip}>
            {/* <SubScriptText base="2" exponent="nd" /> */}
            2 Year
          </Chip>
          <Chip mode="outlined" selected={false} style={styles.chip}>
            {/* <SubScriptText base="3" exponent="rd" /> */}
            3 Year
          </Chip>
          <Chip mode="outlined" selected={false} style={styles.chip}>
            {/* <SubScriptText base="4" exponent="th" /> */}
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
    flexWrap: 'wrap',
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
