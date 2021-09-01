import React, {useState, useRef} from 'react';
import {
  View,
  Alert,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';

const ContentView = props => {
  const [visible, setVisible] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="gray" size="large" />
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: props.url}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        onLoadStart={() => setVisible(true)}
        onLoad={() => setVisible(false)}
      />
      {visible ? <ActivityIndicatorElement /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicatorStyle: {
    flex: 1,
    position: 'absolute',
    margin: 'auto',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
  },
});

export default ContentView;
