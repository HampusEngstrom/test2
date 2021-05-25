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
    &#prev-page,
    &#next-page {
      background-color: unset;
      color: black;
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

  const clickPagination = (page) => () => {
    if (page === activePage) {
      return;
    }
    setActivePage(page);
    window.scrollTo(0, 0);
  };
  const pages = getPages();
  return (
    <div>
      {props.render({ items })}
      <PaginationList data-testid="pagination-list">
        <li
          id={'prev-page'}
          onClick={clickPagination(Math.max(activePage - 1, 0))}
          data-testid={'prev-page'}
        >
          &#8249;
        </li>
        {pages.map((_, index) => (
          <li
            key={index}
            id={'page-' + (index + 1)}
            onClick={clickPagination(index)}
            className={activePage === index ? 'active' : ''}
          >
            {index + 1}
          </li>
        ))}
        <li
          id={'next-page'}
          data-testid={'next-page'}
          onClick={clickPagination(
            Math.min(activePage + 1, pages.length - 1),
          )}
        >
          &#8250;
        </li>
      </PaginationList>
    </div>
  );
};

export default Pagination;
