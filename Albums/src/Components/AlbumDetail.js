import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

export default class AlbumDetail extends Component {

  // const { thumbnail_image, title, artist } = this.props.album;
  
  render() {

    const { thumbnail_image, title, artist, image, url } = this.props.album;

    const { 
      thumbnailStyle, 
      textContent, 
      thumbnailContainer, 
      albumTitle, 
      albumImage
    } = styles;

    return <Card>
        <CardSection>
          <View style={thumbnailContainer}>
            <Image source={{ url: thumbnail_image }} style={thumbnailStyle} />
          </View>
          <View style={textContent}>
            <Text style={albumTitle}>Album Title: {title}</Text>
            <Text>Artist Name: {artist}</Text>
          </View>
        </CardSection>

        <CardSection>
          <Image source={{ url: image }} style={albumImage} />
        </CardSection>

        <CardSection>
          <Button source={{ url: url }} onPress={() => Linking.openURL(url)}>
            Buy now
          </Button>
        </CardSection>
      </Card>;
  }
}

const styles = StyleSheet.create({
  textContent: {
    justifyContent: "space-around",
    flexDirection: "column"
  },
  albumTitle: {
    fontSize: 18
  },
  // artistName: {
  //   textDecorationStyle: 'double',
  // },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  albumImage: {
    height: 300,
    flex: 1,
    width: null,
  }
});