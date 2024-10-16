import CN from '../../../lib/ClassBem';
import IContainer from './Container.types';

export default function classes(cn: IContainer['cn']) {
	const BLOCK = CN('container');

	return {
		block: BLOCK({}, [cn?.margin, cn?.height]),
	};
}
