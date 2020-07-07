import React, { FC } from 'react';

import Main from '../Main'

import { Container, Wrapper } from './styles';

const Layout: FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
}

export default Layout;
