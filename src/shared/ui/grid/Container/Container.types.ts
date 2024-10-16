import { PropsWithChildren } from 'react';

interface IContainer extends PropsWithChildren {
	className?: string;
	cn?: {
		margin?: string;
		height?: string;
	};
}

export default IContainer;
