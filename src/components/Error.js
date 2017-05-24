import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Error extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text style={styles.errorStyle}>Error</Text>
      </View>
    )
  }
}

const styles = {
    errorStyle: {
        color: 'red'
    }
}