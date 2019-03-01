import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  // onPress = () => {    
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  render() {
    return <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
      <Text style={styles.text}>        
        {this.props.children}
      </Text>
      </TouchableOpacity>;
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
});

export { Button };