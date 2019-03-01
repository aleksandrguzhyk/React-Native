import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import firebase from 'firebase';

import { Header, Button, Spinner } from "./Components/Common";
import LoginForm from "./Components/LoginForm";

export default class Auth extends Component {

  state = { loggedIn: null };
  
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBk1_onGI6RorYhccIapNAX2dqKbKEcIrg",
      authDomain: "auth-925b4.firebaseapp.com",
      databaseURL: "https://auth-925b4.firebaseio.com",
      projectId: "auth-925b4",
      storageBucket: "auth-925b4.appspot.com",
      messagingSenderId: "846849588533"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent () {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
           </Button>
          );

      case false:
        return <LoginForm />
      
        default:
        return <Spinner />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 100,
  }
});