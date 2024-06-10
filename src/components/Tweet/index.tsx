import React, { type FC } from "react";

import {
	Avatar,
	Body,
	CommentIcon,
	Container,
	Content,
	Description,
	Dot,
	Header,
	Icons,
	ImageContent,
	LikeIcon,
	RetweetIcon,
	Retweeted,
	RetweetedIcon,
	Status,
} from "./styles";

const Tweet: FC = () => {
	return (
		<Container>
			<Retweeted>
				<RetweetedIcon />
				You retweeted
			</Retweeted>

			<Body>
				<Avatar />

				<Content>
					<Header>
						<strong>Donald J. Trump</strong>
						<span>@realDonaldTrump</span>
						<Dot />
						<time>Feb 31</time>
					</Header>

					<Description>Make America great again</Description>

					<ImageContent />

					<Icons>
						<Status>
							<CommentIcon />
							69
						</Status>
						<Status>
							<RetweetIcon />
							69,420
						</Status>
						<Status>
							<LikeIcon />
							69,420,666
						</Status>
					</Icons>
				</Content>
			</Body>
		</Container>
	);
};

export default Tweet;
