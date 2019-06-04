import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native-elements';
import { Text, View, StyleSheet, ImageBackground, TextInput, ScrollView, } from 'react-native';
import { Constants } from 'expo';



export default class ContentMovie extends React.Component {
 render () {
  return (
  <ImageBackground source={require('../photos/fondo.jpg')} style={styles.foto}>
    <View style={styles.container}>
      <ScrollView style={styles.lista}>
       <Text style={styles.texto}>Title: {this.props.navigation.state.params.item.title}</Text>
        <Text style={styles.texto}>Description: {this.props.navigation.state.params.item.overview}</Text>
        <Text style={styles.texto}>Release Date: {this.props.navigation.state.params.item.release_date}</Text>
        <Text style={styles.texto}>Language: {this.props.navigation.state.params.item.original_language}</Text>
        <Text style={styles.texto}>Rating: {this.props.navigation.state.params.item.vote_average}</Text>
        <Text style={styles.texto}>Votes: {this.props.navigation.state.params.item.vote_count}</Text>
      </ScrollView>
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
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
 },
});