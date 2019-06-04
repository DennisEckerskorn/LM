import * as React from 'react';
import { View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator, createAppContainer} from 'react-navigation';


import PaginaPrincipal from './components/PaginaPrincipal'
import DatosTiempo from './components/DatosTiempo';


const Rootstack = createStackNavigator({
PaginaPrincipal: {
  screen: PaginaPrincipal,
  navigationOptions: () => ({ title: "Busca el Tiempo" })
},
DatosTiempo: {
  screen: DatosTiempo,
    navigationOptions: () => ({ title: "Tiempo" })
}
});

const App = createAppContainer(Rootstack);
export default App;

const styles = StyleSheet.create({
 
  });
