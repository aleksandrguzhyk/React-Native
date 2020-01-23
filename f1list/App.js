import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PilotsList from './src/components/PilotsList/PilotsList.js'

export default class App extends Component {
  render() {
    return (
      <Provider store = { createStore(reducers) } >
        <View style={styles.container} >
          <Text style={styles.header}>F1 Drivers, season 2019</Text>
        </View>
        <PilotsList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#F5FCFF',
      marginTop: 30
    },
    header: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontWeight: '700',
    }
});
