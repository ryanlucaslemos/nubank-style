import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';
import Tabs from '../../components/Tabs';
const Main = () => (
  <Container>
    <Header />
    <Content>
      <Card>
        <CardHeader>
          <Icon name="attach-money" size={28} color="#666" />
          <Icon name="visibility-off" size={28} color="#666" />
        </CardHeader>
        <CardContent>
          <Title>Saldo Disponível</Title>
          <Description>R$ 1.500,00</Description>
        </CardContent>
        <CardFooter>
          <Annotation>
            Transferência de R$20,00 recebida de Diego Schell Fernandes hoje
            06:00h
          </Annotation>
        </CardFooter>
      </Card>
    </Content>
    <Tabs />
  </Container>
);

export default Main;
