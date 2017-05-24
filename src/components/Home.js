import React, { Component } from 'react';
import { View, Text, StatusBar, Alert, Image, ScrollView, Dimensions, Linking, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/photosAction';

export class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    this.props.actions.fetchPhoto();
  }
  
  _downloadLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  render() {
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height
    return (
      <View style={styles.container}>
        <View style={styles.home}>
          {/*<Text onPress={Actions.about} style={styles.text}>This is PageOne!</Text>*/}
          <ScrollView>
            {this.props.photo ? this.props.photo.map(item => {
              return (
                <View key={item.id} style={styles.img}>
                  <View style={styles.imageInfo}>
                  <Text>
                    <Image source={{uri: item.user.profile_image.large}} style={styles.avatar}/>
                  </Text>
                  <Text onPress={() => Actions.profile(item.user.username)} style={{margin: 9}}>{item.user.name}</Text>
                  </View>
                  <Image item={item} source={{uri: item.urls.small}} style={{width, height: 350}} />
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.likeText}>Likes: {item.likes}</Text>
                    <TouchableHighlight onPress={() => this._downloadLink(item.urls.small)} underlayColor="#338c37" style={styles.downloadButton}>
                      <Text style={{color: '#fff', textAlign: 'center', marginTop: 3.5}}>Download</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              );
            }) : <Text></Text>}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = {
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
    flexDirection: 'row'
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

const mapStateToProps = (state) => {
  return {
    photo: state.home.photos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);