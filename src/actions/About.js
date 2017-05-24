import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class About extends Component {
  render() {
    return (
      <View style={{margin: 50}}>
        <Text>sdsd</Text>
        <Text onPress={() => Alert.alert('Hey')}>Hey</Text>
        <Text onPress={() => Actions.auth.error}>Error</Text>
      </View>
    )
  }
}