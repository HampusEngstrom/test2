import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from '../../components/DropDown';
import { sortBy } from '../../helpers/helpers';

const Container = styled.div`
  background-color: white;
  margin: 20px 10px;
  padding: 0 20px;
  min-height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  box-shadow: 0px 1px 5px 0px #bdbdbd;
  border-radius: 5px;
`;

const Toolbar = (props) => {
  const [sortValue, setSortValue] = useState(undefined);
  const onSortChange = (value) => {
    setSortValue(value);
    props.setItems([...props.items.sort(sortBy(value))]);
  };

  return (
    <Container>
      <DropDown
        header={'Sort by'}
        selected={sortValue}
        onChange={onSortChange}
        values={props.attrs}
      />
    </Container>
  );
};

export default Toolbar;
