import styled from 'styled-components';

export const PersonContainer = styled.li`
  display: flex;
  list-style: none;
  width: 200px;
  margin: 10px;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  padding: 12px 8px;
  flex-grow: 1;
  border: 1px solid lightgray;
  box-shadow: 0px 1px 5px 0px #bdbdbd;
  border-radius: 5px;
  img {
    width: 100%;
    border: 1px solid #e8e8e8;
    margin-bottom: 14px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  width: 100%;
  padding: 0 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Text = styled.p`
  padding: 4px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Header = styled.h1`
  margin: 20px 30px;
`;
