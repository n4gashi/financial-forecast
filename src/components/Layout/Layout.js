import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BaseLayout = styled.div`
  padding: 40px 48px;
  background-color: #ffffff;
`;

const Layout = (props) => {
  const { children, ...rest } = props;
  return (
    <BaseLayout {...rest}>
      {children}
    </BaseLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
