import React from 'react';
import { Repository } from '../../types/Repository';
import {
    Container,
    OwnerSlot,
    OwnerAvatar,
    OwnerName,
    TitleAndDescriptionSlot,
    Title,
    Description
} from './styles';

interface RepositoryCardProps {
    repository: Repository;
}

export const RepositoryCard = ({ repository }: RepositoryCardProps) => {
    const { name, description, owner } = repository;
    return (
        <Container>
            <OwnerSlot>
                <OwnerAvatar source={{ uri: owner.avatar_url }} />
                <OwnerName>{owner.login}</OwnerName>
            </OwnerSlot>
            <TitleAndDescriptionSlot>
                <Title>{name}</Title>
                <Description>{description}</Description>
            </TitleAndDescriptionSlot>
        </Container>
    )
}