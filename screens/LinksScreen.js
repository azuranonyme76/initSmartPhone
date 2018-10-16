import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class LinkScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.contentTitle}>
          <Text style={styles.textTitle}> Configuration des Equipes</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentTitle: {
    flex : 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor : '#00002C',
  },
  textTitle : {
    textAlign: 'center',
    color: '#fff',
  },
});
