import React, {Component} from 'react';
import { TouchableOpacity, Text, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import styles from './ListItemStyle';
import * as actions from '../../actions';

class ListItem extends Component {

  componentWillUpdate () {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expended) {
      return (
        <View style={styles.description}>
          <Text>{this.props.library.item.description}</Text>
        </View>
      )
    }
  }

  render() {
    console.log(this.props, 'props');

    const { id, title } = this.props.library.item;
    
    return (
      // <TouchableWithoutFeedback>
        <View>
          <TouchableOpacity 
            onPress={() => this.props.selectLibrary(id)}
            style={styles.container}>
            <Text style={styles.title}>
              {title}
            </Text>
          </TouchableOpacity>
          {this.renderDescription()}
        </View>
      // </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const expended = state.selectedLibraryId === ownProps.library.item.id;
  return { expended };
}

export default connect(mapStateToProps, actions)(ListItem);