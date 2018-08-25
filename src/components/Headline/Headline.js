import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledTitle = styled.h3`
  color: #8E8E93;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
`;

const StyledContent = styled.h2.attrs({
  fontSize: props => props.size || '36px'
})`
  color: #000000;
  font-size: ${props => props.fontSize};
  font-weight: 700;
  margin: 0;
  padding: 0;
`;

const Headline = ({ title, size, children }) => {
  return (
    <div>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledContent size={size}>
        {children}
      </StyledContent>
    </div>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Headline;
