import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export class App extends Component {
  state = { loggedIn: null }

  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAcOH-eNbZ8mq6zN6AkPQ449_TiQPSm_dg',
        authDomain: 'authentication-45924.firebaseapp.com',
        databaseURL: 'https://authentication-45924-default-rtdb.firebaseio.com',
        projectId: 'authentication-45924',
        storageBucket: 'authentication-45924.appspot.com',
        messagingSenderId: '1072992781530',
        appId: '1:1072992781530:web:52218497b54ff2d73191e3',
        measurementId: 'G-FXLES5TLZB'
      });
    } else {
      firebase.app();
    }

    firebase.auth().onAuthStateChanged((user) => {
      user ? this.setState({ loggedIn: true }) : this.setState({ loggedIn: false })
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication"  />
        { this.renderContent() }
      </View>
    )
  };
};

export default App;
