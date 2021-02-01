import firebase from 'firebase';
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

export class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true })
    
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  };

  onLoginFail(err) {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    })
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small"/>;
    }
    return (
      <Button onPress={ this.onButtonPress.bind(this) }>
        Log in
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="Type your email, please"
            value={ this.state.email }
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Password"
            placeholder="And your password"
            value={ this.state.password }
            onChangeText={password => this.setState({ password })}
            secureTextEntry
          />
        </CardSection>
          { this.state.error ? <Text style={ styles.errorTextStyle }>{ this.state.error }</Text> : null }
        <CardSection> 
          { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
};

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
});

export default LoginForm;
