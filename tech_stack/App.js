import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import reducers from './src/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LibraryList from './src/components/LibraryList/LibraryList';

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <Provider store = { createStore(reducers) } >
        <View style={styles.container} >
        {/* <View style={styles.container} > */}
          <Text style={styles.header}>Tech Stack</Text>
        {/* </View> */}
        <LibraryList />
        </View>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 40,
    flex: 1
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
    fontWeight: '700',
  }
});
