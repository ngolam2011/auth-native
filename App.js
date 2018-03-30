import React from 'react';
import firebase from 'firebase';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends React.Component {
  componentWillMount() {
     firebase.initializeApp(
       {
         apiKey: 'AIzaSyAoW4LK4io2Oxwix4MGF5wKm_VFExY5Goo',
         authDomain: 'auth-9dd24.firebaseapp.com',
         databaseURL: 'https://auth-9dd24.firebaseio.com',
         projectId: 'auth-9dd24',
         storageBucket: 'auth-9dd24.appspot.com',
         messagingSenderId: '1038899301242'
       }
     );
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}
