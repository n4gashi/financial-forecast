import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import placeholder from '../../assets/img/transaction-default-image.svg';

const StyledItem = styled.li`
  & {
    display: flex;
    flex-flow: row nowrap;
    list-style-type: none;
    font-size: 16px;
    margin: 0;
    padding: 8px 0px;
    border-bottom: 1px solid #F5F5F5;
  }

  .transaction-item__image,
  .transaction-item__meta,
  .transaction-item__price {
    align-self: center;
  }

  .transaction-item__image {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .transaction-item__meta {
    flex-grow: 1;
  }

  .transaction-item__date {
    color: #8E8E93;
    font-size: 12px;
  }
`;

const TransactionItem = ({ image, title, date, children: price }) => (
  <StyledItem className="transaction-item">
    <img src={image || placeholder} alt="" className="transaction-item__image" />
    <div className="transaction-item__meta">
      <div className="transaction-item__title">
        {title}
      </div>
      <div className="transaction-item__date">
        {date}
      </div>
    </div>
    <div className="transaction-item__price">
      {price}
    </div>
  </StyledItem>
);

TransactionItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string.isRequired,
  date: PropTypes.any,
  children: PropTypes.number.isRequired,
};

export { TransactionItem };
