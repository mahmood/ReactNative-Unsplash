import React, { Component } from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  Text,
  RefreshControl
 } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/photosAction';
import Card from '../components/Card';

class Home extends Component {
  constructor(props){
    super(props);
    
    this._onRefresh = this._onRefresh.bind(this);
  }
  componentDidMount() {
    StatusBar.setBarStyle('light-content');
    this.props.actions.fetchPhoto();
  }

  _onRefresh() {
    this.props.actions.refreshPhoto();
  }

  _renderSpinner(){
    if(this.props.refreshing == false){
      return <ActivityIndicator style={styles.centerIndicator} color="#000"/>
    }else {
      return <View style={styles.refreshView}><Text>Loading...</Text></View>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.home}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.props.refreshing}
                onRefresh={this._onRefresh}
              />
            } 
          >
            {this.props.photo ? this.props.photo.map(item => {
              return <Card key={item.id} item={item} />
            }) : this._renderSpinner()}
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
    flex: 1,
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
  refreshView: { 
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  }
}

const mapStateToProps = (state) => {
  return {
    photo: state.home.photos,
    refreshing: state.home.refreshing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
