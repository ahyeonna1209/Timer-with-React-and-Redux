import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import Timer from './components/Timer';

// You can import from local files
//import AssetExample from './components/AssetExample';


export default class App extends React.Component {
  render() {
    return <Timer />;
  }
}

const styles = StyleSheet.create({
  
});
