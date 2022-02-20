import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export const Loading = () => {
  return (
      <Container>
          <ActivityIndicator size={'large'} color="#3bb0c4"/>
      </Container>
  )
}