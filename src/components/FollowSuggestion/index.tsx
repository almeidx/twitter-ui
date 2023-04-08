import React, { FC } from "react";

import { Avatar, Container, FollowButton, Info } from "./styles";

interface FollowOptions {
  name: string;
  nickname: string;
}

const FollowSuggestion: FC<FollowOptions> = ({ name, nickname }) => {
  return (
    <Container>
      <div>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </div>

      <FollowButton outlined>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
