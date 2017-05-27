import React, { Component } from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import Reducers from './reducers';
import reduxThunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';
import Drawer from 'react-native-drawer';
import DrawerInside from './components/DrawerInside';


export default class App extends Component {
  render (){
    return (
        <Provider store={createStore(Reducers, devToolsEnhancer({ realtime: true }), applyMiddleware(reduxThunk))}>
            <Drawer
              type="overlay"
              content={<DrawerInside />}
              tapToClose={true}
              openDrawerOffset={0.2} // 20% gap on the right side of drawer
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              styles={drawerStyles}
              tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
              })}
            >
             <Routes/> 
          </Drawer>
                            
        </Provider>
    );
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', backgroundColor: '#fff', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
  content: { marginTop: 10 }
}