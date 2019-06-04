import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Button, ScrollView, ListView} from 'react-native';
import { Constants } from 'expo';


export default class MainPage extends React.Component {
  render() {
    return (
      <ImageBackground source={require('../photos/fondo.jpg')} style={styles.foto}>
        <View style={styles.container}>
          <Text style={styles.texto}>Welcome:</Text>
          <Text style={styles.texto}>{this.props.navigation.state.params.nombre} {this.props.navigation.state.params.apellido}</Text>
          <Text style={styles.texto2}>Choose a Movie List</Text>
          <View style={styles.boton}>
            <Button
              title="New Comers"
              onPress={()=>this.props.navigation.navigate('NewComers')}
              />
          </View>
          <View style={styles.boton}>
            <Button
              title="Now Playing"
              onPress={()=>this.props.navigation.navigate('NowPlaying')}
              />
        </View>
        <View style={styles.boton}>
          <Button
            title="Top Rated"
            onPress={()=>this.props.navigation.navigate('TopRated')}
          />
        </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
 },
 foto: {
    flex: 1,
      width: null,
      height: null,
 },
 texto: {
    color: 'white',
    fontSize: 50,
 },
 texto2: {
    color: 'white',
    fontSize: 30,
 },
 boton: {
   margin: 10,
   width: 350,
 }
 });