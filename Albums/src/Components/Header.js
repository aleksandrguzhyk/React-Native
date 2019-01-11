import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.ViewStyle}>
        <Text style={styles.TextStyle}>{this.props.headerText}!</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0.2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
  TextStyle: {
    fontSize: 20
  }
});