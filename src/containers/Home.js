import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/photosAction';
import Card from '../components/Card';

class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    this.props.actions.fetchPhoto();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.home}>
          <ScrollView>
            {this.props.photo ? this.props.photo.map(item => {
              return <Card key={item.id} item={item} />
            }) : <ActivityIndicator style={styles.centerIndicator} color="#000"/>}
          </ScrollView>
        </View>
      </View>
    )
  }
}

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