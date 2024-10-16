import CN from '../../lib/ClassBem';
import IButton from './Button.types';

export default function classes(cn: IButton['cn']) {
	const BLOCK = CN('button');

	return {
		block: BLOCK({
			[`${cn?.size}`]: ['small', 'medium', 'large'].includes(`${cn?.size}`),
		})
	}
}
