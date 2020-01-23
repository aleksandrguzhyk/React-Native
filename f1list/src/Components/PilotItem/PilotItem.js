import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './PilotItemStyle.js'
import ImagePicker from 'react-native-image-crop-picker';
import { NavigationActions, NavigationEvents } from 'react-navigation';

class PilotItem extends Component {  
  render() {
    return ( 
      <View style={styles.container}>
        <View>
          <Image 
          source={{uri: this.props.pilot.item.avatar}}
          style={styles.image}
          />
        </View>
        <TouchableOpacity 
          onPress={() => naviagation.navigate('F1Drivers', item) }
          style={styles.textRow} >
            <Text style={styles.title}>{this.props.pilot.item.title}</Text>
            <Text style={styles.team}>{this.props.pilot.item.team}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PilotItem;