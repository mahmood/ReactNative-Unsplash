import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Profile extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile :)</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 63,
    padding: 10
  },
})

export default Profile;