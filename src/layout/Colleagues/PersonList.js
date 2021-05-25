import React from 'react';
import { PersonContainer, StyledList, Text, Row } from './styles';
import SocialMediaButtons from './SocialMedia';

const Person = ({ item }) => (
  <PersonContainer data-testid="list-item">
    <img src={item.imagePortraitUrl} alt={'employee'} />
    <Row>
      <Text>{item.name}</Text>
      <SocialMediaButtons item={item} />
    </Row>
    <Row>
      <Text>Office: {item.office}</Text>
    </Row>
  </PersonContainer>
);

const PersonList = ({ items }) => (
  <StyledList data-testid="list">
    {items.map((item, index) => (
      <Person key={item.name + ' ' + index} item={item} />
    ))}
  </StyledList>
);

export default PersonList;
