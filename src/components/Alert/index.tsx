import React from 'react';
import Modal from 'react-native-modal';
import { useGlobalAlert } from '../../hooks/useGlobalAlert';
import {
    Container,
    Content,
    Title,
    Description,
    Footer,
    DismissButton,
    DismissButtonTitle
} from './styles';

export interface AlertProps {
    title: string;
    description?: string
}

export const Alert = () => {

    const { show, props, hideAlert } = useGlobalAlert();
    const { title, description } = props;

    return (
        <Modal isVisible={show}>
            <Container>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
                <Footer>
                    <DismissButton onPress={hideAlert}>
                        <DismissButtonTitle>OK</DismissButtonTitle>
                    </DismissButton>
                </Footer>
            </Container>
        </Modal>
    )
}