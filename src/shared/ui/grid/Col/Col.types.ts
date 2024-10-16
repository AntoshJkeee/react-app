import { PropsWithChildren } from 'react';

interface ICol extends PropsWithChildren {
	className?: string;
	cn?: {
		margin?: string;
		cols?: string;
		offset?: string;
		order?: string;
		justify?: string;
		alignSelf?: string;
		padding?: string;
		display?: string;
		direction?: string;
		gap?: string;
		flexWrap?: string;
	};
}

export default ICol;
