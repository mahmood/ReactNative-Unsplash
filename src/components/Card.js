import React, {Component} from 'react';
import {View, Text, TouchableHighlight, ActivityIndicator, Linking, Dimensions} from 'react-native';
import Image from 'react-native-image-progress';
import { Actions } from 'react-native-router-flux';

class Card extends Component {
  downloadLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }
  render() {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    const {item} = this.props;
    return (
      <View style={styles.img}>
        <View style={styles.imageInfo}>
          <Image source={{uri: item.user.profile_image.large}} style={styles.avatar}/>
          <Text onPress={() => Actions.profile(item.user.username)} style={{margin: 15}}>{item.user.name}</Text>                    
        </View>
        <Image indicator={ActivityIndicator}  item={item} source={{uri: item.urls.small}} style={{width, height: 350}} />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={styles.likeText}>Likes: {item.likes}</Text>
          <TouchableHighlight onPress={() => this.downloadLink(item.urls.small)} underlayColor="#338c37" style={styles.downloadButton}>
            <Text style={{color: '#fff', textAlign: 'center', marginTop: 3.5}}>Download</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  home: {
    flex: 2,
    marginTop: 63,
    padding: 10
  },
  img: {
    marginBottom: 10,
    marginTop: 10
  },
  imageInfo: {
    flexDirection: 'row',
    marginBottom: 10
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25
  },
  likeText: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 3
  },
  downloadButton: {
    width: 90,
    height: 25,
    backgroundColor: '#4CAF50',
    flex: 1,
    margin: 5,
    alignSelf: 'flex-end',
    borderRadius: 3
  }
}


export default Card;