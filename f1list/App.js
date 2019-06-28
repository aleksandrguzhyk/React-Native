/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import reducers from './src/reducers';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import PilotsList from './src/Components/PilotsList/PilotsList.js';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store = { createStore(reducers) } >
        <View style={styles.container} >
          <Text style={styles.header}>F1 Pilots List</Text>
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
