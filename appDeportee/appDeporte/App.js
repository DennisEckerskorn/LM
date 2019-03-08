import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, } from 'react-native';
import { Constants } from 'expo';
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Body,
  Title,
  Right,
  Footer,
  FooterTab,
  Icon,
  Tab,
  Tabs,
  TabHeading,
  Item,
  Input,
  Label,
  Form,
  Picker,
  List,
  ListItem,
} from 'native-base';

// You can import from local files
import Valor from './components/tabValor';
import Tiempo from './components/tabTiempo';
import Descanso from './components/tabDescanso';



export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={'/assets/sport.jpg'}
        style={{ width: '100%', height: '100%' }}>
        <Container style={styles.container}>
          <Header hasTabs />
          <Tabs>
            <Tab heading="Valores">
              <Valor />
            </Tab>
            <Tab heading="Tiempo">
              <Tiempo />
            </Tab>
            <Tab heading="Descanso">
              <Descanso />
            </Tab>
          </Tabs>
          <Footer>
            <FooterTab>
              <Button info>
                <Text>"Empezar Entrenamiento"</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  
});
