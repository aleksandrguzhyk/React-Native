import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import styles from './PilotItemStyle.js'

class PilotItem extends Component {
  
  render() {
    return ( 
      <View style={styles.container}>
        <View>
          <Image 
          source = {{uri: this.props.pilot.item.avatar}}
          style = {styles.image}
          />
        </View>
        <View style={styles.textRow}>
          <Text style={styles.title}>{this.props.pilot.item.title}</Text>
          <Text style={styles.team}>{this.props.pilot.item.team}</Text>
        </View>
      </View>
    );
  }
}

export default PilotItem;