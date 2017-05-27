import React, {Component} from 'react';
import {View, Text} from 'react-native';

class DrawerInside extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Text>Register</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    margin:10
  }
}

export default DrawerInside;