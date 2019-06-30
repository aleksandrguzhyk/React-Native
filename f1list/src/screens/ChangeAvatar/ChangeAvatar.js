import React, { Component } from 'react'
import {View, Button } from 'react-native'
import ImagePicker from 'react-native-image-crop-picker';

class ChangeAvatar extends Component {
render() {
  return (
    <View>
      <View>
        <Image 
          source={{uri: this.props.pilot.item.avatar}}
          style={styles.image}
        />
      </View>
      <View>
        <Button
            onPress = {
              () => {
                ImagePicker.openPicker({
                  width: 300,
                  height: 400,
                  cropping: true
                }).then(image => {
                  console.log(image);
                });
              }
            }
            title = "Open photo from gallery" 
        />
        < Button
          onPress = {
            () => {
              ImagePicker.openCamera({
                width: 300,
                height: 400,
                cropping: true,
              }).then(image => {
                console.log(image);
              });
            }
          }
          title = "Open camera" 
        />
      </View>
    </View>
  )
}

}

export default ChangeAvatar;