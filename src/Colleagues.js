import React, { useState } from 'react';
import styled from 'styled-components';

const PersonContainer = styled.li`
  display: flex;
  list-style: none;
  width: 200px;
  margin: 10px;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  padding: 12px 8px;
  flex-grow: 1;

  img {
    width: 100%;
    border: 1px solid gray;
  }
`;

const StyledList = styled.ul`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
const Name = styled.p`
  padding: 16px 4px 4px 4px;
`;
const Office = styled.p`
  padding: 5px;
`;

const Person = ({ item }) => (
  <PersonContainer>
    <img src={item.imagePortraitUrl} alt={'image of employee'} />
    <Name>{item.name}</Name>
    <Office>Office: {item.office}</Office>
  </PersonContainer>
);

const List = ({ items }) => (
  <StyledList>
    {items.map((item) => (
      <Person key={item.email} item={item} />
    ))}
  </StyledList>
);

const Colleagues = (props) => {
  const [items, setItems] = useState(props.items);
  return (
    <div data-testid="colleagues">
      <h1>The fellowship of the tretton37</h1>
      <List items={items} />
    </div>
  );
};
export default Colleagues;
