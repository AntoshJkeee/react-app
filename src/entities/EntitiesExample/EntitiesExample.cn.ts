import CN from '../../shared/lib/ClassBem';
import IEntitiesExample from './EntitiesExample.types';

export default function classes(cn: IEntitiesExample['cn']) {
	const BLOCK = CN('entities-example');

	return {
		block: BLOCK({}, [cn?.padding]),
	}
}
