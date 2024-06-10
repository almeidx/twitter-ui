import React, { type FC } from "react";

import ProfilePage from "../ProfilePage";

import {
	BackIcon,
	BellIcon,
	BottomMenu,
	Container,
	EmailIcon,
	Header,
	HomeIcon,
	ProfileInfo,
	SearchIcon,
} from "./styles";

const Main: FC = () => {
	return (
		<Container>
			<Header>
				<button type="button">
					<BackIcon />
				</button>

				<ProfileInfo>
					<strong>Almeida</strong>
					<span>69,420 Tweets</span>
				</ProfileInfo>
			</Header>

			<ProfilePage />

			<BottomMenu>
				<HomeIcon className="active" />
				<SearchIcon />
				<BellIcon />
				<EmailIcon />
			</BottomMenu>
		</Container>
	);
};

export default Main;
