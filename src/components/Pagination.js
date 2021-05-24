import React from 'react';
import styled from 'styled-components';

const PaginationList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  li {
    cursor: pointer;
    padding: 5px 10px;
    background-color: black;
    margin: 0 1px;
    color: white;
    list-style: none;
  }
`;

class Pagination extends React.PureComponent {
  state = {
    activePage: 0,
    items: this.props.items.slice(
      0,
      this.props.nbrOfVisibleItems || 32,
    ),
  };

  getPages = () => {
    const nbrOfPages = Math.ceil(
      this.props.items.length / (this.props.nbrOfVisibleItems || 32),
    );

    return new Array(nbrOfPages).fill(0);
  };

  clickPagination = (activePage) => () => {
    this.setState({
      activePage,
      items: this.props.items.slice(
        this.props.nbrOfVisibleItems * activePage,
        this.props.nbrOfVisibleItems * activePage +
          this.props.nbrOfVisibleItems,
      ),
    });
  };

  render() {
    const { items } = this.state;
    const pages = this.getPages();
    return (
      <div>
        {this.props.render({ items })}
        <PaginationList data-testid="pagination-list">
          {pages.map((_, index) => (
            <li
              key={index}
              id={'page-' + index + 1}
              onClick={this.clickPagination(index)}
            >
              {index + 1}
            </li>
          ))}
        </PaginationList>
      </div>
    );
  }
}

export default Pagination;
