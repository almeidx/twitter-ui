import React, { type FC } from "react";

import Tweet from "../Tweet";
import { Container, Tab, Tweets } from "./styles";

const Feed: FC = () => {
	return (
		<Container>
			<Tab>Tweets</Tab>

			<Tweets>
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
				<Tweet />
			</Tweets>
		</Container>
	);
};

export default Feed;
