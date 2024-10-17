import CN from '../../shared/lib/ClassBem';
import IWidgetsExample from './WidgetsExample.types';

export default function classes(cn: IWidgetsExample['cn']) {
	const BLOCK = CN('widgets-example');

	return {
		block: BLOCK({}, [cn?.padding]),
		elementWrapper: BLOCK('wrapper'),
		elementSomeWrapper: BLOCK('some-wrapper'),
	};
}
