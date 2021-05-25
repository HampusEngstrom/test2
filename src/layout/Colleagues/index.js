import React, { useState } from 'react';
import SocialMediaButtons from './SocialMedia';
import Pagination from './../../components/Pagination';
import Toolbar from './../Toolbar';
import {
  PersonContainer,
  StyledList,
  Text,
  Row,
  Header,
} from './styles';

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

const List = ({ items }) => (
  <StyledList data-testid="list">
    {items.map((item, index) => (
      <Person key={index} item={item} />
    ))}
  </StyledList>
);

const Colleagues = (props) => {
  const [items, setItems] = useState(props.items);
  return (
    <div data-testid="colleagues">
      <Header>The fellowship of the tretton37</Header>
      <Toolbar
        items={props.items}
        setItems={setItems}
        attrs={['name', 'office']}
      />
      <Pagination
        nbrOfVisibleItems={props.nbrOfVisibleItems || 32}
        items={items}
        render={({ items }) => <List items={items} />}
      />
    </div>
  );
};

export default Colleagues;
