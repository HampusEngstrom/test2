import React, { useState } from 'react';
import Pagination from '../../components/Pagination';
import Toolbar from '../Toolbar/Toolbar';
import { Header } from './styles';
import List from './PersonList';

const Colleagues = (props) => {
  const [items, setItems] = useState(props.allItems);
  return (
    <div data-testid="colleagues">
      <Header>The fellowship of the tretton37</Header>
      <Toolbar
        items={props.allItems}
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
