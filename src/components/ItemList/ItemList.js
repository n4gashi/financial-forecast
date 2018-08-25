import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledList = styled.ul`
  & {
    margin: 0;
    padding: 0;
    width: ${props => props.width || 'auto'};
  }
`;

const ItemList = ({ children, width }) => (
  <StyledList width={width}>
    {children}
  </StyledList>
);

ItemList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(HTMLLIElement)),
    PropTypes.arrayOf(PropTypes.element),
  ]),
  width: PropTypes.string,
};

export default ItemList;
