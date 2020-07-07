import React, { FC } from 'react';

import Feed from '../Feed';

import {
  Avatar,
  Banner,
  CakeIcon,
  Container,
  EditButton,
  Followage,
  LocationIcon,
  ProfileData,
} from './styles';

const ProfilePage: FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Almeida</h1>
        <h2>@realDonaldTrump</h2>

        <p>
          Nice twitter eh <a href="https://almeidx.me">@this_is_a_mention</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Portugal
          </li>
          <li>
            <CakeIcon />
            Born 18 July
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>69</strong>
          </span>
          <span>
            <strong>69,420 </strong> followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
