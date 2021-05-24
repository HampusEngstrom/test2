import React, { useState } from 'react';
import styled from 'styled-components';
import SocialMediaButtons from './SocialMedia';
import Pagination from './../../components/Pagination';

const PersonContainer = styled.li`
  display: flex;
  list-style: none;
  width: 200px;
  margin: 10px;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  padding: 12px 8px;

  img {
    width: 100%;
    border: 1px solid gray;
    margin-bottom: 14px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Text = styled.p`
  padding: 4px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Person = ({ item }) => (
  <PersonContainer data-testid="list-item">
    <img src={item.imagePortraitUrl} alt={'image of employee'} />
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
      <h1>The fellowship of the tretton37</h1>
      <Pagination
        nbrOfVisibleItems={props.nbrOfVisibleItems || 32}
        items={items}
        render={({ items }) => <List items={items} />}
      />
    </div>
  );
};
export default Colleagues;
