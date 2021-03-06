import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
import axios from 'axios';

export default class App extends React.Component {
  state = { tiempo: '', lugar: '', humedad: '' };

  componentWillMount() {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?q=Javea&&APPID=***'
      )
      .then(response => {
        this.setState({ tiempo: response.data.main.temp });
        this.setState({ lugar: response.data.name });
        this.setState({ humedad: response.data.main.humidity });
      });
  }

  renderList() {
    return (
      <View>
        <Text>{this.state.tiempo}</Text>
        <Text>{this.state.lugar}</Text>
        <Text>{this.state.humedad}</Text>
      </View>
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
