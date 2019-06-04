import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';

export default class App extends React.Component {
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderList() {
    return this.state.albums.map(item =>
       <Text>{item.title}</Text>);
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
});
