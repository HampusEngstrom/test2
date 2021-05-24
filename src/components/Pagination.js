import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 100%;
  flex-wrap: wrap;
  margin: 30px 0;

  li {
    cursor: pointer;
    padding: 5px 10px;
    background-color: black;
    margin: 0 1px;
    color: white;
    list-style: none;
    &.active {
      background-color: #5d5d5d;
    }
  }
`;

const Pagination = (props) => {
  const [activePage, setActivePage] = useState(0);

  const items = props.items.slice(
    props.nbrOfVisibleItems * activePage,
    props.nbrOfVisibleItems * activePage + props.nbrOfVisibleItems,
  );

  const getPages = () => {
    const nbrOfPages = Math.ceil(
      props.items.length / (props.nbrOfVisibleItems || 32),
    );

    return new Array(nbrOfPages).fill(0);
  };

  const clickPagination = (activePage) => () => {
    setActivePage(activePage);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {props.render({ items })}
      <PaginationList data-testid="pagination-list">
        {getPages().map((_, index) => (
          <li
            key={index}
            id={'page-' + index + 1}
            onClick={clickPagination(index)}
            className={activePage === index ? 'active' : ''}
          >
            {index + 1}
          </li>
        ))}
      </PaginationList>
    </div>
  );
};

export default Pagination;
