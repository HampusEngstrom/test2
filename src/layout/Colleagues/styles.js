import styled from 'styled-components';

export const PersonContainer = styled.li`
  flex-grow: 0;
  flex-shrink: 0;

  display: flex;
  list-style: none;
  margin: 10px;
  background-color: white;
  border: 1px solid black;
  flex-direction: column;
  padding: 12px 8px;
  border: 1px solid lightgray;
  box-shadow: 0px 1px 5px 0px #bdbdbd;
  border-radius: 5px;
  margin: 5px;

  @media (max-width: 480px) {
    width: 100%;
    flex-grow: 0;
    flex-shrink: 1;
  }

  @media (min-width: 481px) {
    width: 445px;
  }

  @media (min-width: 568px) {
    width: 259px;
  }

  @media (min-width: 810px) {
    width: 250px;
  }

  img {
    width: 100%;
    border: 1px solid #e8e8e8;
    margin-bottom: 14px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  width: 100%;
  padding: 30px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
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
