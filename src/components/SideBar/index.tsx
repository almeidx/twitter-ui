import React, { FC } from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Body,
  Container,
  SearchIcon,
  SearchInput,
  SearchWrapper,
} from './styles';

const SideBar: FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="You might like"
            elements={[
              <FollowSuggestion
                name="Donald J. Trump"
                nickname="@realDonaldTrump"
              />,
              <FollowSuggestion
                name="Donald J. Trump"
                nickname="@realDonaldTrump"
              />,
              <FollowSuggestion
                name="Donald J. Trump"
                nickname="@realDonaldTrump"
              />,
            ]}
          />

          <List
            title="News"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List
            title="News"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
          <List
            title="News"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
