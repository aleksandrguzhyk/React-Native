import React, {Component} from 'react'
import {FlatList, View, Text} from 'react-native'
import { connect } from 'react-redux'
import PilotItem from '../PilotItem/PilotItem.js'
import styles from './PilotsListStyles.js'

class PilotsList extends Component {

  renderItem(pilot) {
    return <PilotItem pilot = {pilot} />
  }

  // _renderItem = ({user}) => ( 
  //   <TouchableOpacity onPress = {() => this._onPress(item)} >
  //     <Text > {user.title} </Text>  
  //   </TouchableOpacity>
  // );

  render() {
    return ( 
      <View style={styles.container}>
        <FlatList
          data={this.props.pilots}
          renderItem = {this.renderItem}
          keyExtractor = {(pilot) => pilot.id} 
        />
        {/* <Text>{this.props.pilots.title}</Text> */}
      </View>
    );
  }
}

const mapStateToProps = state => {  
  return {
    pilots: state.pilots
  };
};

export default connect(mapStateToProps)(PilotsList);
