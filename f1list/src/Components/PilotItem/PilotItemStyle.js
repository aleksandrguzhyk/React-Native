import React, {
  Component
} from "react";
import {
  StyleSheet
} from "react-native";

export default StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  textRow: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 10
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 10,
    marginLeft: 10,
  },
  textName: {
    fontWeight: '600',
  },
  mail: {
    color: '#023475'
  }
});
