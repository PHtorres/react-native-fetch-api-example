import React from 'react';
import { StatusBar } from 'react-native';
import { Container } from './styles';

export const AppContainer: React.FC = ({ children }) => {
    return (
        <>
            <StatusBar barStyle={'dark-content'}/>
            <Container>
                {children}
            </Container>
        </>
    );
}