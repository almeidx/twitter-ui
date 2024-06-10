import React, { type FC, type ReactNode } from "react";

import { Container, Item, Title } from "./styles";

interface ListProps {
	title: string;
	elements: ReactNode[];
}

const List: FC<ListProps> = ({ elements, title }) => {
	return (
		<Container>
			<Item>
				<Title>{title}</Title>
			</Item>

			{elements.map((e, i) => (
				<Item key={i}>{e}</Item>
			))}
		</Container>
	);
};

export default List;
