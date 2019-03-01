import React, { Component} from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { Input, CardSection, Card, Button, Spinner } from './Common';

export default class LoginForm extends Component {
  
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress () {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)   
      .then(this.onLogingSuccess.bind(this))
    .catch (() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLogingSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
    });
  }

  onLoginFail() {
    this.setState({ 
      error: 'Authentification Failed!', 
      loading: false 
    });
  }

  onLogingSuccess () {
    this.setState({ 
      email: '',
      password: '',
      error: '',
      loading: false,
     });
  }

  renderButton () {
    if (this.state.loading) {
      return <Spinner size="small"/>
    } else {
      return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
      );
    }
  }
  

  render() {
    return (
      <Card>
          <CardSection>
            <Input 
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder="user@example.com"
            label="Email"
            />
          </CardSection>

          <CardSection>
            <Input
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}
              placeholder="password"
              label="Password"
              secureTextEntry
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>{this.state.error}</Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
}