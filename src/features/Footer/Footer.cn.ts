import CN from '../../shared/lib/ClassBem';
import IFooter from './Footer.types';

export default function classes(cn: IFooter['cn']) {
	const BLOCK = CN('footer');

	return {
		block: BLOCK({}, [cn?.margin]),
	};
}
