import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Constants } from 'expo';
import axios from 'axios';




// You can import from local files


export default class App extends React.Component {
   render() {
    return (
      <ImageBackground source={require('../photos/tiempoFoto.jpg')} style={styles.foto}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Bienvenido a tu App del Tiempo</Text>
          </View>
          <View>
            <Button style={styles.button}
              onPress={()=>this.props.navigation.navigate('DatosTiempo')}
              title="Muestrame el Tiempo en Javea"
              color="blue"
            />
          </View>
        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  foto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 50,
    fontSize: 30,
    fontWeight: 'bold',
  },
  });
