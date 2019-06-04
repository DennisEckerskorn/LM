import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TextInput, Button } from 'react-native';
import { Constants } from 'expo';


export default class LoginPage extends React.Component {
  constructor (props) {
    super(props);
    this.state= { nombre: '', apellido: ''}
  }
  render() {
    return (
      <ImageBackground source={require('../photos/fondo.jpg')} style={styles.foto}>
      <View style={styles.container}>
        <Text style={styles.text}>Create Account:</Text>
          <View>
            <TextInput placeholder="Name" style={styles.textField} onChangeText={(nombre) =>
            this.setState({nombre})} />
            <TextInput placeholder="Surname" style={styles.textField} onChangeText={(apellido) =>
            this.setState({apellido})} />
            <View style={styles.boton}>
              <Button
                title="Login"
                onPress={()=>this.props.navigation.navigate('MainPage', {nombre: this.state.nombre, apellido: this.state.apellido})}
                />
            </View>
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
 },
 textField: {
    margin: 5,
    width: 400,
    backgroundColor: 'white',
    padding: 25,
    borderWidth: 0.5,
    borderColor: 'grey'
 },
 text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
 },
 boton: {
    margin: 25,
 }
});
