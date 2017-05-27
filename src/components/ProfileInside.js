import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Image from 'react-native-image-progress';

class ProfileInside extends Component {
  render(){
    console.log(this.props);
    return (  
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image indicator={ActivityIndicator} style={styles.avatar} source={{ uri: this.props.profile.profile_image.medium}}/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{this.props.profile.name}</Text>
            <Text style={styles.location}>{this.props.profile.location}</Text>
            <View style={styles.photo}>
              {this.props.profile.photos.map(item => {
                return (
                  <View key={item.id} style={styles.profilePic}>
                    <Image indicator={ActivityIndicator} item={item} source={{uri: item.urls.regular}} style={{width: 100, height: 100}} />
                  </View>
                );
              })}
            </View>
          </View>
      </View>
    )
  }
};

const styles = {
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
};

export default ProfileInside;
