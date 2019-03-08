import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
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
  List,
  ListItem,
} from 'native-base';

const styles = StyleSheet.create({
});

export default class tabValor extends React.Component {
  render() {
    return (
      <Content>
        <Text>'¿Cuantas series quieres hacer?'</Text>
        <Item rounded>
          <Input placeholder="" />
        </Item>
        <List>
          <ListItem itemDivider>
            <Text>'Rutina de hoy'</Text>
          </ListItem>
          <ListItem>
            <Text> Ejercicio 1: Burpees</Text>
          </ListItem>
          <ListItem>
            <Text> Ejercicio 2: Squads</Text>
          </ListItem>
          <ListItem>
            <Text> Ejercicio 3: Jumping Jacks</Text>
          </ListItem>
          <ListItem>
            <Text> Ejercicio 4: Mountain Climber</Text>
          </ListItem>
        </List>
        <Text>'¿Cuantos minutos quieres entrenar?'</Text>
        <Item rounded>
          <Input placeholder="" />
        </Item>
        <Text>'¿Cuantos minutos quieres descansar?'</Text>
        <Item rounded>
          <Input placeholder="" />
        </Item>
      </Content>
    );
  }
}