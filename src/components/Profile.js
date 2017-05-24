import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableHighlight, Alert} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/profileAction';

class Profile extends Component {
  componentDidMount() {
    this.props.actions.fetchProfile(this.props.data);
  }
  
  componentWillUnmount() {
    this.props.actions.UnmountProfile();
  }

  renderProfile(){
    return (
        <View style={{flex: 1}}>
          <View style={styles.imageContainer}>
            <Image style={styles.avatar} source={{ uri: this.props.user.profile.profile_image.large}}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{this.props.user.profile.name}</Text>
            <Text style={styles.location}>{this.props.user.profile.location}</Text>
          </View>
          <View style={styles.photo}>
            <Text>Photos</Text>
          </View>
        </View>
    )
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
            {this.props.user.profile ? this.renderProfile() : <Text>Loading</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 63,
    padding: 10
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#909090',
    borderWidth: 1
  },
  infoContainer: {
    flex: 4,
    alignItems: 'center',
  },
  name:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#3e3e3e'
  },
  location: {
    margin: 10,
    height: 20
  },
  photo: {
    
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);