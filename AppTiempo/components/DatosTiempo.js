import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';


export default class DatosTiempo extends React.Component {
  state = { tiempo: '', lugar: '', humedad: '', minimo: '', maximo: '' };

  componentWillMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Javea&&APPID=***&units=metric'
      )
      .then(response => {
        this.setState({ tiempo: response.data.main.temp });
        this.setState({ lugar: response.data.name });
        this.setState({ humedad: response.data.main.humidity });
        this.setState({ minimo: response.data.main.temp_min });
        this.setState({ maximo: response.data.main.temp_max });
      });
  }

  renderList() {
    return (
      <ImageBackground source={require('../photos/tiempoFoto.jpg')} style={styles.container}>
        <View style={styles.datos}> 
          <Text style={styles.text}>{this.state.lugar}</Text>
          <Text style={styles.text}>{this.state.tiempo}<Text> Cº</Text></Text>
          <Text style={styles.text}>{this.state.humedad}<Text>% de Humedad</Text></Text>
          <Text style={styles.text}>{this.state.maximo}<Text> Cº Temperatura maxima</Text></Text> 
          <Text style={styles.text}>{this.state.minimo}<Text> Cº Temperatura minima</Text></Text>
        </View>
      </ImageBackground>
    );
  }

  render() {
    return (
    <View style={styles.container}>
    {this.renderList()}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datos: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white', 
    margin: 10,
    fontWeight: 'bold',
    fontSize: 25,
  }
});
