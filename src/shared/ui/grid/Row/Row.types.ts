import { PropsWithChildren } from 'react';

interface IRow extends PropsWithChildren {
	className?: string;
	cn?: {
		margin?: string;
		justify?: string;
		alignSelf?: string;
		padding?: string;
		display?: string;
		direction?: string;
		gap?: string;
		gutters?: string;
		alignContent?: string;
		alignItems?: string;
		height?: string;
	};
}

export default IRow;
