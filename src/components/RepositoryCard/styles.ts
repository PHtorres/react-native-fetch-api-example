import styled from 'styled-components/native';

export const Container = styled.View`
padding: 20px;
background-color:#fff;
flex-direction: row;
justify-content: flex-start;
align-items: center;
border-radius: 15px;
`;

export const OwnerSlot = styled.View`
justify-content: space-between;
align-items: center;
`;

export const OwnerName = styled.Text`
font-size: 16px;
color: #222;
`;

export const OwnerAvatar = styled.Image`
width: 50px;
height: 50px;
border-radius: 25px;
`;

export const TitleAndDescriptionSlot = styled.View`
justify-content: center;
align-items: flex-start;
margin-left: 10px;
`;

export const Title = styled.Text`
font-size: 24px;
color: #222;
`;

export const Description = styled.Text`
font-size: 16px;
color: #999;
`;