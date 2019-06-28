import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import styles from './PilotItemStyle.js'
import PropTypes from 'prop-types'

class PilotItem extends Component {
componentWillMount() {
  pilot = this.props.pilot
}
  
  render() {
    console.log(pilot, '-- props');
    return ( 
      // <View>
      //   <Image source = {this.props.pilot.avatar}
      //   style = { styles.image }
      //   />
      // </View>
      <View>
        <Text>Bla-bla-bla</Text>
        <Text>{pilot.title}</Text>
        <Text> Bla - bla - bla 222</Text>

      </View>
    );
  }
}

export default PilotItem;