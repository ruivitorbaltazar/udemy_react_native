import React, { Component } from 'react';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common';

export class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyAXeqW4u8DWm5RP0kMQZ4HDLdG43MQ46mg',
        authDomain: 'manager-85a06.firebaseapp.com',
        projectId: 'manager-85a06',
        storageBucket: 'manager-85a06.appspot.com',
        messagingSenderId: '41797651906',
        appId: '1:41797651906:web:afebfe91d546cac0dada5b'
      });
    } else {
      firebase.app();
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    
    return (
      <Provider store={store}>
        <Header headerText="MANAGER"/>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;





