import React, { Component } from 'react'
import { View, Text } from 'react-native'

class F1Drivers extends Component {
  render() {
    return (
      <View>
        <Image>{item.avatar}</Image>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.team}</Text>
        </View>
        <View>
          <Text>{item.bio}</Text>
        </View>
      </View>
    )
  }
}