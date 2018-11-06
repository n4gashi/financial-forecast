import React from 'react'
import PropTypes from 'prop-types'
import Headline from '../Headline';
import ItemList from '../ItemList';
import { TransactionItem } from './';

const TransactionsList = ({
  title,
  children,
}) => (
  <div>
    <Headline size="22px">{title}</Headline>
    <ItemList width="344px">
      {children}
    </ItemList>
  </div>
);

TransactionsList.propTypes = {
  title: PropTypes.string,
  children: ItemList.propTypes.children,
};

export default TransactionsList;
