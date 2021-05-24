import React from 'react';
import styled from 'styled-components';
import DropDown from './../../components/DropDown';
import { sortBy } from './../../helpers';

const Container = styled.div`
  background-color: white;
  margin: 20px 30px;
  padding: 0 20px;
  min-height: 50px;
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  box-shadow: 0px 1px 5px 0px #bdbdbd;
  border-radius: 5px;
`;

const Toolbar = (props) => (
  <Container>
    <DropDown
      header={'Sort by'}
      onChange={(value) =>
        props.setItems([...props.items.sort(sortBy(value))])
      }
      values={props.attrs}
    />
  </Container>
);

export default Toolbar;
