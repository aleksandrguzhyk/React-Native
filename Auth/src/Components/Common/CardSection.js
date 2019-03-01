import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

class CardSection extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
      );
    }
  }
  
const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: 'relative',
  }
});

export { CardSection };