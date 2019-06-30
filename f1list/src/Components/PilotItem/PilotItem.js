import React, { Component } from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import styles from './PilotItemStyle.js'
import ImagePicker from 'react-native-image-crop-picker';

class PilotItem extends Component {  
  render() {
    return ( 
      <View style={styles.container}>
        <TouchableOpacity
            onPress={
              () => {
                ImagePicker.openPicker({
                  width: 80,
                  height: 80,
                  cropping: true
                }).then(image => {
                  console.log(image);
                });
              }
            }
        >
          <View>
            <Image 
            source={{uri: this.props.pilot.item.avatar}}
            style={styles.image}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.textRow}>
          <Text style={styles.title}>{this.props.pilot.item.title}</Text>
          <Text style={styles.team}>{this.props.pilot.item.team}</Text>
        </View>
      </View>
    );
  }
}

export default PilotItem;