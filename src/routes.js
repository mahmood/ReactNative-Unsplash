import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';

class Routes extends Component{
    render(){
        return (
            <Router drawerImage={require('./img/burger.png')}>
                <Scene key="root">
                    <Scene 
                        navigationBarStyle={{backgroundColor: '#2c3e50'}}
                        titleStyle={{color: '#fff'}}
                        key="home" component={Home}
                        title="Unsplash"
                        initial={true}
                        />
                    <Scene
                        key="profile"
                        title="Profile"
                        navigationBarStyle={{backgroundColor: '#2c3e50'}}
                        leftButtonIconStyle={{tintColor: 'white'}}
                        titleStyle={{color: '#fff'}}
                        component={Profile}
                    />
                </Scene>
            </Router>
        );
    }
}

export default Routes;