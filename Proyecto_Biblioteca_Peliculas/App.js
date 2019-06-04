import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';

// You can import from local files
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import NewComers from './components/NewComers';
import NowPlaying from './components/NowPlaying';
import TopRated from './components/TopRated';
import ContentMovie from './components/ContentMovie';

const Rootstack = createStackNavigator({
LoginPage: {
  screen: LoginPage,
  navigationOptions: () => ({ title: "Login", headerStyle: {
      backgroundColor: 'lightblue'}})
},
MainPage: {
  screen: MainPage,
    navigationOptions: () => ({ title: "Main Page", headerStyle: {
      backgroundColor: 'lightblue'} })
},
NewComers: {
  screen: NewComers,
    navigationOptions: () => ({ title: "New Comers", headerStyle: {
      backgroundColor: 'lightblue'} })
},
NowPlaying: {
  screen: NowPlaying,
  navigationOptions: () => ({ title: "Now Playing", headerStyle: {
      backgroundColor: 'lightblue'} })
},
TopRated: {
  screen: TopRated,
  navigationOptions: () => ({ title: "Top Rated", headerStyle: {
      backgroundColor: 'lightblue'}})
},
ContentMovie: {
  screen: ContentMovie,
  navigationOptions: () => ({ title: "Detalles", headerStyle: {
      backgroundColor: 'lightblue'} })
}
});

const App = createAppContainer(Rootstack);
export default App;
const styles = StyleSheet.create({
 head: {

 }
});
