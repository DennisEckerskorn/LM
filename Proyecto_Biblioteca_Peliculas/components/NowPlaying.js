import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Button, ScrollView, } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';



export default class NowPlaying extends React.Component {
 state = { itemList: [], item: [] }

 componentWillMount() {
   axios
   .get('https://api.themoviedb.org/3/movie/now_playing?api_key=***&language=en-US&page=2')
     .then(response => {
     this.setState({ itemList: response.data.results});
   });
}
 
 renderList () {
  return this.state.itemList.map( item=>
  <View style={styles.container}>
      <Text button onPress={() =>  this.props.navigation.navigate('ContentMovie', {item: item})} style={styles.text}>{item.title}
      <Ionicons name="md-arrow-dropright-circle" size={20} />
      </Text>
      <Image source={{ uri: (baseUrl + item.poster_path)}} style={styles.foto} />
  </View>
  );
}

render () {
  return (
  <ImageBackground source={require('../photos/fondo.jpg')} style={styles.container}>
    <ScrollView>
      {this.renderList()}
   </ScrollView>
  </ImageBackground>
  );
  }  
}

var baseUrl = 'http://image.tmdb.org/t/p/w185'

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 20,
},
text: {
  color: 'white',
  fontSize: 23,
  fontWeight: 'bold',
  backgroundColor: 'black',
},
foto: {
  width: 250, 
  height: 300,
},
});