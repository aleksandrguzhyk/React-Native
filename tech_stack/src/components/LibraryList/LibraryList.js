import React, {Component} from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../ListItem/ListItem.js';
import styles from './LibraryListStyle';

class LibraryList extends Component {
  renderItem(library) {
        return <ListItem library = {library} />
      }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.libraries}
          renderItem = {this.renderItem}
          keyExtractor = {(library) => library.id}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};

export default connect(mapStateToProps)(LibraryList);