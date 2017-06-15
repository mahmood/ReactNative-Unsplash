import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Image from 'react-native-image-progress';
import * as actions from '../actions/profileAction';
import ProfileInside from '../components/ProfileInside';


class Profile extends Component {
  componentDidMount() {
    this.props.actions.fetchProfile(this.props.data);
  }
  
  componentWillUnmount() {
    this.props.actions.UnmountProfile();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.user.profile
          ? <ProfileInside profile={this.props.user.profile} />
          : <ActivityIndicator style={styles.centerIndicator} color="#000"/>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    flex: 1
  },
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
    flexDirection: 'row',
  },
  profilePic:{
   margin: 13
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
