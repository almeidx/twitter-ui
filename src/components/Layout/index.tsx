import React, { FC } from 'react';

import MenuBar from '../MenuBar'
import Main from '../Main'
import SideBar from '../SideBar'

import { Container, Wrapper } from './styles';

const Layout: FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
