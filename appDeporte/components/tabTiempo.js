import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Image,
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
  List,
  ListItem,
} from 'native-base';

const styles = StyleSheet.create({
});

export default class tabTiempo extends React.Component {
  render() {
    return (
      <Content>
        <Item rounded>
          <Input placeholder=" Burpees" />
        </Item>
        <Item rounded>
          <Input placeholder=" 2.00 min " />
        </Item>
      </Content>
    );
  }
}
