import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

export class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white '}}>
          <Text style={styles.errorTextStyle}>{ this.props.error }</Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large"/>
    }

    return (
      <Button onPress={ this.onButtonPress.bind(this) }>
        Login
      </Button>
    )
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={ this.props.email }
            label="Email"
            placeholder="email@email.com"
            onChangeText={ this.onEmailChange.bind(this) }
            />
        </CardSection>
        <CardSection>
          <Input
            value={ this.props.password }
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={ this.onPasswordChange.bind(this) }
          />
        </CardSection>

        { this.renderError() }

        <CardSection>
          { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
})

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
